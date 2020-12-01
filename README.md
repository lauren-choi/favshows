# FavShows
A React app where users compile their favorite TV shows. It tells users the total number of episodes in their list of shows, and it includes functionality for filtering by genre, filtering by status, and sorting by number of episodes. Uses React Bootstrap.

## Component organization
I split the app into three main components: the navigation bar, a list of all TV shows, and an aggregator.

### Navigation
The navigation bar is split into a separate component called `NavBar`. It includes buttons for filtering by genre, filtering by status, and sorting by number of episodes.

### All TV Shows
The list of all TV shows is comprised of three separate components. At the base level, each show is represented as a Card in `DisplayItem`. Then, all the shows are displayed as a list of cards in `DisplayList`. Finally, `FilteredList` implements filtering/sorting methods to show the appropriate display.

### Aggregator
Once a user adds a show to their favorites list, it renders inside the aggregator. Each card item is rendered separately as an `AggregateItem` -- this has the same display as a `DisplayItem`, but the button at the bottom includes functionality for removing from the aggregator rather than adding to it. As the user adds more items to the aggregator, they're displayed in list format inside `AggregateList`.

## How data is passed down
### Topmost level (App.jsx)
At the topmost level, `App.jsx` stores the list of shows (`showsList`), a list of favorite aggregated shows (`aggregateList`), and the total number of episodes in the aggregated list (`total`). The state of `showsList` is set to a copy of the actual list to avoid mutating the original data when we sort.

Since `App.jsx` houses the raw lists, it also defines all functions acting on them: specifically, `sortEpisodesAscending`, `sortEpisodesDescending`, `resetList`, `addToAggregateList`, `removeFromAggregateList`, and `sumEpisodes`. We pass these down to `FilteredList` and `DisplayList` as props so we can call them later.

### List level (FilteredList, DisplayList, AggregateList)
The second level contains components displaying the items in list format.

`DisplayList` creates a new function called `addShow`, which calls `addToAggregateList` and `sumEpisodes` for each show in the total list of TV shows. `addShow` is then passed as a prop into each individual show. 

Then, `FilteredList` creates a set of functions to filter the list of shows from `DisplayList`. The constructor initializes the default states for each filter/sort to `all`, which is then updated when respective filters are selected. `FilteredList` also uses the sorting functions passed in from `App.jsx` to sort the filtered list of TV shows. 

Finally, `AggregateList` creates a new function called `removeShow` that calls `removeFromAggregateList` and `sumEpisodes` for each show in the favorited aggregate list. It then passes `removeShow` as a prop into each individual show.

### Item level (NavBar, DisplayItem, AggregateItem)
At the bottom level are individual components/cards.

`DisplayItem` renders individual shows in the list of all TV shows. Each card displays the properties of a single show object -- which is passed as a prop through the mapping function in `DisplayList` -- and creates a button where users can call the `addShow` method.

Likewise, `AggregateItem` renders individual shows in the list of aggregated favorite shows. It also displays the properties of a single show object, which is passed as a prop through the mapping function in `AggregateList`. The main difference between this component and `DisplayItem` is that the button calls `removeShow` rather than `addShow`. 

Another important component is `NavBar`, which is rendered in `FilteredList` but isn't associated with a particular item. NavBar creates selection options for each filter/sort function, calling the sorting/filtering functions passed in as props from `FilteredList`.

## User-triggered state changes
The main user interactions that trigger state changes are adding to the aggregator, removing from the aggregator, sorting, and filtering.

Each time the user presses a button to add to / remove from the aggregator, it triggers a state change in the topmost level to `total` and `aggregateList`. `sumEpisodes` updates `total`'s state to the current number of episodes in the aggregator, while `aggregateList`'s state is modified to either append or splice the corresponding show. To avoid mutation the original data, we create a copy of the list, perform all functions on the copy, and then set the state of `aggregateList` to the copy.

Additionally, each time the user selects a filtering or sorting method in `NavBar`, the filtering and sorting props defined in `FilteredList` are updated to reflect the selected method. In response, the `applyFilters` method -- in combination with the `filter` builtin -- updates the state of the displayed list to match the applied filters/sorting.