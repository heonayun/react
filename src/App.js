// import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Main from "./pages/main/Main";
// import Intro from "./pages/intro/Intro";
// import Job from "./pages/job/Job";
// import FontContainer from "./pages/font/FontContainer";
// import CountContainer from "./pages/count/CountContainer";
// import AnimalsContainer from "./context/expert/AnimalsContainer";
// import CharContainer from "./context/basic/CharContainer";
// import ParentContainer from "./context/nomal/ParentContainer";
// import SideEffectMount from "./LifeCycle/function/SideEffectMount";
// import ProductContainer from "./LifeCycle/memoization/ProductContainer";
// import StyledComponent01 from "./style/basic/StyledComponent01";
// import GlobalStyle from "./style/global";
// import theme from "./style/theme";
// import { ThemeProvider } from "styled-components";
// import BasicContainer from "./style/basic/BasicContainer";
// import FontAwesome from "./style/fontAwesome/FontAwesome";
// import SideEffect from "./LifeCycle/function/SideEffect";
// import LifeCycleContainer from "./LifeCycle/class/LifeCycleContainer";
// import InfiniteLoop from "./LifeCycle/class/infiniteLoop";
// import CheckInput from "./ref/basic/CheckInput";
// import FoodContainer from "./ref/export/FoodContainer";
// import Checkbox from "./ref/basic/Checkbox";
// import Check from "./ref/basic/Check";
// import Name from "./ref/basic/Name";
// import Color from "./state/basic/Color";
// import Name from "./state/basic/Name";
// import Sound from "./state/basic/Sound";
// import Count from "./state/basic/Count";
// import UserContainer from "./export/UserContainer";
// import FoodContainer from "./map/FoodContainer";
// import Container from "./props/Container";
// import Jsx05 from "./Jsx05";
import { RouterProvider } from "react-router-dom";
import router from "./routes/modules/router";

function App() {
    return (
        // <Container />
        // <FoodContainer />
        // <UserContainer />
        // <Count />
        // <Sound />
        // <Name />
        // <Color />
        // <Name />
        // <Check />
        // <Checkbox />
        // <CheckInput />
        // <FoodContainer />
        // <InfiniteLoop />
        // <LifeCycleContainer />
        // <SideEffect />
        // <SideEffectMount />
        // <ProductContainer />
        // <StyledComponent01 />
        // <ThemeProvider theme={theme}>
        // {/* // <div class="">
        // //     <StyledComponent01 />
        // //     <GlobalStyle />
        // // </div> */}
        // {/* <BasicContainer /> */}
        // <FontAwesome />
        // </ThemeProvider>
        // <>안녕 리엑트😉</>
        // <CharContainer />
        // <ParentContainer />
        // <AnimalsContainer />
        // <CountContainer />
        // <FontContainer />
        <>
        {/* <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/intro' element={<Intro />}/>
            <Route path='/job' element={<Job />}>
                <Route path=':title' element={<Job />} />
            </Route>
        </Routes> */}
        <RouterProvider router={router}/>

        </>
    );
}   

export default App;
