import './App.css';

// Contains the product list and passes it to FilteredList component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello hellooo
        </p>
      </header>
    </div>
  );
}

const activityList = [
  { name: "sleeping", type: "physical", location: "indoors", intensity: 1 },
  { name: "meditating", type: "mental", location: "both", intensity: 1 },
  { name: "yoga", type: "physical", location: "both", intensity: 2 },
  { name: "breathing exercises", type: "mental", location: "both", intensity: 1 },
  { name: "journaling", type: "mental", location: "both", intensity: 1 },
  { name: "healthy cooking", type: "physical", location: "indoors", intensity: 3 },
  { name: "affirmations", type: "mental", location: "both", intensity: 1 },
  { name: "going on a walk", type: "physical", location: "outdoors", intensity: 3 },
  { name: "arts and crafts", type: "physical", location: "indoors", intensity: 2 },
  { name: "listening to music", type: "physical", location: "indoors", intensity: 2 },
  { name: "time with loved ones", type: "physical", location: "both", intensity: 2 },
  { name: "hiking", type: "physical", location: "outdoors", intensity: 3 },
]

export default App;
