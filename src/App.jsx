import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import TasksContextProvider from "./contexts/TasksContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <TasksContextProvider>
          <Header />
          <TaskList />
          <Sidebar />
        </TasksContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
