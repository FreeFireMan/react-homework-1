
import './App.css';
import {Header} from './Components/Hader/header';
import {Left_Sidebar} from './Components/Left sidebar menu/left_sidebar';
import {Card} from './Components/Card/Card';
import {WalkingTheBlock} from './Components/Walking the block/Walking the block'
import {arr,mainUrl,sideUrl,cardUrl} from './constants'

function App() {
  return (
    <div className="App">

      <Header url={mainUrl}
              title_1={'Home'} title_2={'Blog'} title_3={'Contact'}/>

              <WalkingTheBlock main_text={'You are greeted by a guide to famous places in Lviv region'}/>

              <div className="body_site">

              <Left_Sidebar url={sideUrl}
                            top_title={'The most famous places in Lviv'}
                    link_1={'Market Square'}link_2={'High Castle'} link_3={'Lviv National Opera'}
                    link_4={'Armenian Cathedral'}link_5={'Dominican monastery'} link_6={'City Hall'}/>

                    <div className= "Card_list">
                        {
                            arr.map(item=>{
                                return(
                                    <Card
                                        key={item}
                                        url_Img={cardUrl}
                                        title_card={'Legends of Lviv'}
                                        some_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...'}
                                        more_info={'Learn more'}
                                    />
                                )
                            })
                        }
                    </div>

                </div>


    </div>
  );
}

export default App;
