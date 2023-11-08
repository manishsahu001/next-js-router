"use client"
const ExampleComponent = () => {

  const testFun = ()=>{
    console.log("Example Functiton")
  }
  return (
    <div>
        <h1 onClick={testFun}>Example Component</h1>
    </div>
  )
}

export default ExampleComponent