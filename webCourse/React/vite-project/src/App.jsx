import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './Greetings';
import Dice from './Dice';
import DieRoll from './DieRoll';
import Color from './color';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList.jsx';
import Clicker from './Clicker';
import Gridbox from './Gridbox';
import ScoreKepeer from './ScoreKepeer.jsx';
import Emoji from './AddEmoji.jsx';
import LuckyN from './LuckyN.jsx';
import Form from './UsernameForm.jsx';
import ProductForm from './ProductList.jsx';

const data = [
  {id:1, item:"Apples", quantity:3, completed:true},
  {id:2, item:"Oranges", quantity:4, completed:false},
  {id:3, item:"Kiwi", quantity:2, completed:true},
  {id:4, item:"Milk", quantity:3, completed:true},
  {id:5, item:"Eggs", quantity:3, completed:false}
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
  <>

  {/* <Greetings name="Kartik"/>
  <DieRoll/> 
  <Color props={["red", "blue", "green"]}/> */}
  {/* <ShoppingList items={data}/> */}
  {/* <PropertyList items={properties}/> */}
  {/* <Clicker></Clicker> */}
  {/* <Gridbox></Gridbox> */}
  {/* <Emoji/> */}
  {/* <LuckyN/> */}
  {/* <Form></Form> */}
  <ProductForm></ProductForm>
  </>
  )
}

export default App
