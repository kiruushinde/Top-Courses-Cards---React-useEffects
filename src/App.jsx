import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter'
import { apiUrl, data } from './data'
import { useEffect, useState } from 'react'
import Spinner from './components/Spinner'

function App() {

  // const [text, setText] = useState("");
  // const [name, setName] = useState("kiran");

  // const [size, setSize] = useState(window.screen.width);
  // runs any kind of side effect, 
  // after rendering app component, this will be running..
  // this runs on every render..

  // #️⃣ variation 1
  // useEffect(() => {
  //   console.log("UI rendering done..");
  // });


  // #️⃣ variation 2
  // this will run only single time, on first render of app component
  // useEffect(() => {
  //   console.log("UI rendering done..")
  // }, []);

  // #️⃣ variation 3
  // on first rendering + whenever dependency changes..
  // useEffect(() => {
  //   console.log("change observed..");
  // }, [name]); // text is dependency..
  // whenever name is changed, then it will be executed...

  // #️⃣ variation 4
  // useEffect(() => {
  //   // and then this is executed..
  //   console.log("listener added..");
  //   return () => {
  //     // first this is executed..
  //     console.log("listener removed..");
  //   }
  // }, [text]);

  // function changeHandler(event) {
  //   setText(event.target.value);
  //   console.log(text);
  // }

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(data[0].title);


  async function fetchData() {
    // while fetching the data loading is true
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      console.log(output);
      setCourses(output.data);
    } catch (error) {
      toast.error("Network me error hai ..");
    }

    // once data is fetched, loading is false
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <div className="App">
    //   <p className=''>window size is {size}</p>
    //   <input type="text" onChange={changeHandler} />
    // </div>
    <div className='min-h-screen flex flex-col bg-gray-600'>
      <div>
        <Navbar></Navbar>
      </div>

      <div className=''>
        <div>
          <Filter
            category={category}
            setCategory={setCategory}
            filterData={data}></Filter>
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
