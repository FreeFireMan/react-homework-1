
import './App.css';
import {Header} from './Components/Hader/header';
import {Left_Sidebar} from './Components/Left sidebar menu/left_sidebar';
import {Card} from './Components/Card/Card';
import {WalkingTheBlock} from './Components/Walking the block/Walking the block'


function App() {
  return (
    <div className="App">


      <Header url={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D0%B0_%D0%B0%D0%BD%D0%B3%D0%BB%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D1%8E.png/475px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D0%B0_%D0%B0%D0%BD%D0%B3%D0%BB%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D1%8E.png'}
              title_1={'Home'} title_2={'Blog'} title_3={'Contact'}/>

              <WalkingTheBlock main_text={'You are greeted by a guide to famous places in Lviv region'}/>

              <div className="body_site">

              <Left_Sidebar url={'https://photo-lviv.in.ua/wp-content/uploads/2017/09/nagirniy04.jpg'}
                            top_title={'The most famous places in Lviv'}
                    link_1={'Market Square'}link_2={'High Castle'} link_3={'Lviv National Opera'}
                    link_4={'Armenian Cathedral'}link_5={'Dominican monastery'} link_6={'City Hall'}/>

                    <div className= "Card_list">
                    <Card
                         url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                         title_card={'Legends of Lviv'}
                         some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                         more_info={'Learn more'}
                    />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />

                        <Card
                            url_Img={'https://c0.wallpaperflare.com/preview/950/944/846/ukraine-lviv-blackandwhite-travel.jpg'}
                            title_card={'Legends of Lviv'}
                            some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                            more_info={'Learn more'}
                        />


                    </div>

                </div>


    </div>
  );
}

export default App;
