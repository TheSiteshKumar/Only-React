
import Card from './Card.jsx'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Favorite Influencers!
    </h1>
    <div className="flex">
    <Card name="Niklas Christl" image="https://ak.picdn.net/contributors/185220506/avatars/thumb.jpg?t=5736810" />
    <Card name="Jay Shetty" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jay_Shetty_Headshot_2021.jpg/330px-Jay_Shetty_Headshot_2021.jpg"/>
    <Card name="Gary Vaynerchuk" image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gary_Vaynerchuk_public_domain.jpg/345px-Gary_Vaynerchuk_public_domain.jpg"/>
    </div>
    
    </>
  )
}

export default App
