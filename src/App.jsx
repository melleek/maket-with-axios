import './App.css'
import Switcher from './components/Switcher'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Card1 from './components/Card1.jsx/Card1'
import { useEffect } from 'react'
import axios from 'axios'

let api = "http://localhost:3000/data"

const App = () => {

  const [lng, setImg] = useState("en")

  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const [todo, setTodo] = useState([])
  const [addName, setName] = useState("")
  const [addRole, setRole] = useState("")
  const [addAge, setAge] = useState("")
  const [editName, setEditName] = useState("")
  const [editAge, setEditAge] = useState("")
  const [editRole, setEditRole] = useState("")
  const [modal, setModal] = useState("")
  const [modalAdd, setModalAdd] = useState("")
  const [idx, setIdx] = useState(null)

  async function get() {
    try {
      let { data } = await axios.get(api)
      setTodo(data)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get()
  }, [])

  async function deleteUser(id) {
    try {
      let { data } = await axios.delete(`${api}/${id}`)
      get()
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser(id, user) {
    try {
      let { data } = await axios.put(`${api}/${id}`, user);
      get()
    } catch (error) {
      console.log(error);
    }
  }

  async function addUser(user) {
    try {
      let { data } = await axios.post(api, user)
      get()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* header */}
      <header>

        {/* nav1 */}
        <nav className='bg-[#F5FAFE] flex justify-between sm:py-[15px] sm:px-[24px] lg:py-[25px] lg:px-[80px] dark:bg-[#232323e2] dark:text-white'>
          <h1 className='font-[700] text-[16px] sm:flex-wrap flex items-center gap-[15px]'>{t('nav1h')} <p className='font-[400]'>{t('nav1p')} </p> </h1>
          {/* main nav */}
          <main className='flex items-center gap-[80px]'>
            {/* d1 */}
            <div className='lg:flex items-center gap-[20px] sm:hidden'>
              <img src="src/assets/nav/gift.png" alt="" />
              <p>{t('d1p')}</p>
            </div>

            {/* d2 */}
            <div className='lg:flex  sm:hidden items-center gap-[20px]'>
              <img src="src/assets/nav/star.png" alt="" />
              <p>{t('d2p')}</p>
            </div>

            {/* d3 */}
            <div className='flex items-center gap-[25px]'>
              <select name="" id="" className='rounded-[10px] border-none px-[10px] py-[5px] text-white text-[16px] bg-[#85b1b8] dark:bg-[#054e5f]'
                value={lng}
                onChange={(e) => {
                  changeLanguage(e.target.value)
                  setImg(e.target.value)
                }}
              >
                <option value="en">En</option>
                <option value="ru">Ru</option>
              </select>
              <Switcher />
            </div>
          </main>
        </nav>
        {/* nav2 */}
        <nav className='lg:py-[35px] lg:px-[80px] sm:py-[25px] sm:px-[24px] sm:flex-wrap sm:gap-[40px] flex justify-between dark:bg-[#232323e2] dark:text-white'>
          <div className=' flex items-center lg:gap-[80px] sm:flex-wrap sm:gap-[25px]'>
            <img src="src/assets/nav/Best tour plan.png" className="sm:block sm:m-[auto]" />
            <div className='bg-[#F5FAFE] flex justify-between items-center rounded-[7.5px] w-[350px]'>
              <input type="text" placeholder='Search Location' className='bg-[#F5FAFE] rounded-[6px] p-[15px]' />
              <button className='bg-[red] p-[19.1px] rounded-[6px]'><img src="src/assets/nav/search.png " alt="" /></button>
            </div>
          </div>
          <div className='lg:flex items-center gap-[60px] sm:hidden'>
            <img src="src/assets/nav/Cart.png" alt="" />
            <div className='flex items-center gap-[8px]'>
              <img src="src/assets/nav/Ellipse 1 (3).png" alt="" />
              <p>{t('cher')}</p>
              <img src="src/assets/nav/chevron-down.png" alt="" />
            </div>
          </div>
        </nav>

        {/* nav3 */}
        <nav className='lg:py-[25px] sm:px-[24px] sm:py-[25px] sm:gap-[20px] sm:flex-wrap lg:px-[80px] bg-[#0A223D] dark:bg-[#1e1e1f] text-[white] uppercase flex justify-around'>
          <h2>{t("h21")}</h2>
          <h2>{t("h22")}</h2>
          <h2>{t("h23")}</h2>
          <h2>{t("h24")}</h2>
          <h2>{t("h25")}</h2>
          <h2>{t("h26")}</h2>
          <h2>{t("h27")}</h2>
        </nav>
      </header>


      {/* main */}
      <main>

        {/* section 1 */}
        <section className='bg-[#F5FAFE] lg:px-[162px] sm:px-[24px] lg:py-[18px] sm:py-[20px] dark:bg-[#232323e2] dark:text-white'>
          <h2>{t("sec1h")}</h2>
          <div className='flex justify-between items-center'>
            <div className='lg:py-[42px] sm:py-[25px] flex flex-col items-start gap-[5px]'>
              <img src="src/assets/main/Stars.png" alt="" />
              <h1 className='lg:text-[32px] font-[500]'>{t("sec1h1")}</h1>
              <h3>{t("sech3")}</h3>
            </div>
            <div className='bg-[#EC1F46] rounded-[4px] text-white w-[65px] p-[8px] lg:flex sm:hidden flex-col items-center'>
              <p className='text-[8px]'>{t("p")}</p>
              <h1>4.5/5</h1>
            </div>
          </div>

          <main className='flex items-center justify-between sm:flex-wrap sm:gap-[25px]'>
            {/* left */}
            <aside>
              <img src="src/assets/main/Rectangle 5.png" alt="" />
            </aside>
            {/* rigth */}
            <aside className='flex flex-col items-start gap-[20px]'>
              <div className='bg-[#0A223D] p-[20px] text-white rounded-[8px]'>
                <div className='flex justify-between items-center'>
                  <p>{t("psec1")}</p>
                  <p className='flex items-center gap-[8px]'><img src="src/assets/main/user.png" alt="" />2 x {t("asidep")}</p>
                </div>
                <div className=' flex justify-between item-center'>
                  <div className='flex flex-col items-start'>
                    <h1 className='text-[24px] font-[800]'>$ 8,500</h1>
                    <p>{t("p2sec1")}</p>
                  </div>
                  <p className='flex items-center gap-[8px]'><img src="src/assets/main/Vector (6).png" alt="" />1 x {t("asidep2")}</p>
                </div>
                <div className='flex justify-between items-center pt-[10px]'>
                  <h1 className='text-[18px] font-[600]'>{t("t1")}</h1>
                  <p className='text-[18px] font-[600] flex items-center gap-[8px]'><img src="src/assets/main/Vector (7).png" alt="" />1221000</p>
                </div>
                <button className='bg-[#EC1F46] px-[84px] py-[13px] rounded-[4px] mt-[20px]'>{t("btn1")}</button>

              </div>
              <img src="src/assets/main/Map.png" alt="" />
            </aside>
          </main>
          <div className='lg:py-[60px] lg:flex sm:hidden items-center justify-between'>
            <div className='flex flex-col items-start gap-[10px]'>
              <h1 className='text-[#EC1F46]'>{t("sech1")}</h1>
              <img src="src/assets/main/Rectangle 18.png" alt="" />
            </div>
            <h1>{t("sech2")}</h1>
            <h1>{t("sech4")}</h1>
            <h1>{t("sech5")}</h1>
            <h1>{t("sech6")}</h1>
            <h1>{t("sech7")}</h1>
            <h1>{t("sech8")}</h1>
          </div>
        </section>

        {/* section 2 */}
        <section className='lg:px-[162px] sm:px-[24px] lg:py-[18px] sm:py-[20px] bg-[#F5FAFE] dark:bg-[#232323e2] dark:text-white'>
          <h1 className='text-[32px]'>{t("sec2h")}</h1>
          <main className='flex justify-between items-center gap-[32px] sm:flex-wrap lg:flex-nowrap py-[40px]'>
            <div className='flex flex-col items-start'>
              <div className='bg-[#0A223D] text-white lg:px-[20px] lg:w-[600px] sm:px-[15px] sm:pr-[200px] lg:pr-[340px] py-[10px]'>
                <h1>{t("t2")}</h1>
              </div>
              <div className='bg-[#FFF] dark:bg-[#232323e2] flex justify-between lg:px-[20px] lg:w-[600px] lg:py-[30px] sm:flex-wrap sm:gap-[10px] sm:px-[15px] sm:py-[20px]'>
                <aside className='flex flex-col gap-[10px] items-start'>
                  <p className='flex items-center gap-[15px]'><img src="src/assets/main/circle check full.png" alt="" />{t("p1")}</p>
                  <p className='flex items-center gap-[15px]'><img src="src/assets/main/circle check full.png" alt="" />{t("p2")}</p>
                  <p className='flex items-center gap-[15px]'><img src="src/assets/main/circle check full.png" alt="" />{t("p3")}</p>
                </aside>
                <aside className='flex flex-col gap-[10px] items-start'>
                  <p className='flex items-center gap-[15px]'><img src="src/assets/main/circle check full.png" alt="" />{t("p4")}</p>
                  <p className='flex items-center gap-[15px]'><img src="src/assets/main/circle check full.png" alt="" />{t("p5")}</p>

                </aside>
              </div>
            </div>

            {/* d2 */}
            <div className='flex flex-col items-start '>
              <div className='bg-[#0A223D]  text-white  lg:px-[20px] lg:w-[600px] sm:px-[15px] sm:pr-[248px] lg:pr-[340px] py-[10px]'>
                <h1>{t("t3")}</h1>
              </div>
              <div className='bg-[#FFF] dark:bg-[#232323e2]  flex justify-between lg:px-[20px] lg:w-[600px] lg:py-[34.5px] sm:flex-wrap sm:gap-[10px] sm:px-[15px] sm:py-[20px]'>
                <aside>
                  <p className='flex items-start gap-[15px] text-[14px] lg:w-[168px]'><img src="src/assets/main/circle check full.png" alt="" />{t("p6")}</p>
                </aside>
                <aside>
                  <p className='flex items-center gap-[15px]'><img src="src/assets/main/calendar.png" alt="" />{t("p4")}</p>
                </aside>
              </div>
            </div>
          </main>
          <main>
            <div className='bg-[#0A223D] text-white lg:w-[1235px] px-[15px] py-[10px]'>
              <h1>{t("p8")}</h1>
            </div>
            <div className='bg-[white] dark:bg-[#232323e2]  lg:w-[1235px] px-[15px] py-[10px]'>
              <div className='flex justify-between lg:py-[30px] lg:px-[25px] sm:flex-wrap sm:px-[5px] sm:py-[10px] sm:gap-[30px]'>
                <div className='flex flex-col gap-[10px] items-start'>
                  <h1 className='text-[red]'>{t("jk")}</h1>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v1")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v2")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v3")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v4")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v5")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v6")}</p>
                </div>
                <div className='flex flex-col gap-[10px] items-start'>
                  <h1 className='text-[red]'>{t("jk1")}</h1>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v1")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v2")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v3")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v4")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v5")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v6")}</p>
                </div>
                <div className='flex flex-col gap-[10px] items-start'>
                  <h1 className='text-[red]'>{t("jk2")}</h1>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v1")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v2")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v3")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v4")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v5")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v6")}</p>
                </div>
              </div>
              <img src="src/assets/main/Line 1 (1).png" className="block m-[auto]" />
              <div className='flex justify-between lg:py-[30px] lg:px-[25px] sm:flex-wrap sm:px-[5px] sm:py-[10px] sm:gap-[30px]'>
                <div className='flex flex-col gap-[10px] items-start'>
                  <h1 className='text-[red]'>{t("jk")}</h1>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v1")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v2")}</p>
                </div>
                <div className='flex flex-col gap-[10px] items-start'>
                  <h1 className='text-[red]'>{t("jk")}</h1>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v1")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v2")}</p>
                </div>
                <div className='flex flex-col gap-[10px] items-start'>
                  <h1 className='text-[red]'>{t("jk")}</h1>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v1")}</p>
                  <p className='flex items-center gap-[10px]'><img src="src/assets/main/circle check full.png" alt="" />{t("v2")}</p>
                </div>
              </div>
            </div>
          </main>
        </section>


        {/* section 3 */}
        <section className='bg-[#F5FAFE] lg:py-[50px] lg:px-[165px] sm:py-[20px] sm:px-[42px] dark:bg-[#232323e2] dark:text-[white]'>
          <h1 className='text-[42px] font-[500] text-center'>{t("h1sec2")}</h1>
          <div className='flex justify-between items-center sm:flex-wrap'>
            {/* left */}
            <aside className='lg:flex py-[30px] sm:hidden'>
              <img src="src/assets/main/Rectangle 20.png" alt="" />
              <div className='bg-[#0A223D] py-[26px] lg:w-[366px] px-[24px] text-white text-[18px] '>
                <img src="src/assets/main/Stars.png" className="pb-[10px]" />
                <h1>{t("h1P")}</h1>
                <p className='pt-[27px]'>{t("pJ")}</p>
                <p className='text-[14px] flex items-center gap-[10px] pt-[20px]'><img src="src/assets/main/map-pin.png" alt="" />{t("rm")}</p>
                <p className='text-[14px] flex items-center gap-[10px] pt-[20px]'><img src="src/assets/main/user.png" alt="" />1 x {t("asidep")}</p>
                <p className='text-[14px] flex items-center gap-[10px] pt-[20px]'><img src="src/assets/main/Vector (7).png" alt="" />2 x {t("asidep2")}</p>
                <p className='flex items-center justify-between pt-[20px] text-[22px]'>$ 8,500 <button className='bg-[red] text-[18px] text-white py-[10px] px-[26px] rounded-[5px]'>{t("btn2")}</button></p>
              </div>
            </aside>

            {/* right */}
            <aside>
              <Card1 img={"src/assets/main/Rectangle 20 (1).png"} h1={t("h1P")} p={t("rm")} p2={t("asidep")} p3={t("asidep2")} btn={t("btn2")} />
            </aside>
          </div>
          <div className='flex justify-between sm:flex-wrap lg:flex-nowrap sm:gap-[24px] sm:pt-[30px]'>
            <Card1 img={"src/assets/main/Rectangle 20 (2).png"} h1={t("h1P")} p={t("rm")} p2={t("asidep")} p3={t("asidep2")} btn={t("btn2")} />
            <Card1 img={"src/assets/main/Rectangle 20 (3).png"} h1={t("h1P")} p={t("rm")} p2={t("asidep")} p3={t("asidep2")} btn={t("btn2")} />
            <Card1 img={"src/assets/main/Rectangle 20 (4).png"} h1={t("h1P")} p={t("rm")} p2={t("asidep")} p3={t("asidep2")} btn={t("btn2")} />
          </div>
        </section>



        {/* section 4 */}
        <section className='bg-[#F5FAFE] lg:py-[50px] lg:px-[265px] sm:py-[20px] sm:px-[42px] dark:bg-[#232323e2] dark:text-[white] flex flex-col items-center'>
          <h1 className='lg:text-[42px] sm:text-[32px] font-[500] text-center uppercase'>{t("h1sec4")}</h1>
          <div className=' bg-[white] rounded-[8px] mt-[120px] lg:px-[80px] sm:px-[20px] dark:bg-[#1e1e1f]'>
            <div className='flex flex-col items-center gap-[8px]'>
              <img src="src/assets/main/Ellipse 3.png" className="block m-[auto] relative top-[-50px]" />
              <h1 className='text-[red]'>{t("t6")}</h1>
              <p>{t("t7")}</p>
              <img src="src/assets/main/Stars.png" alt="" />
            </div>
            <p className='py-[40px] text-center'>{t("t8")}</p>
          </div>
        </section>


        {/* section 5 */}
        <section className='bg bg-[#F5FAFE] lg:py-[50px] lg:px-[265px] sm:py-[20px] sm:px-[42px] dark:bg-none dark:bg-[#232323e2] '>
          <div className='text-white flex justify-between items-center sm:flex-wrap sm:gap-[30px]'>
            <p >{t("t9")}<h1 className='text-[38px]'>{t("t10")}</h1></p>
            <div className='bg-[#F5FAFE] flex justify-between items-center rounded-[7.5px] w-[350px]'>
              <input type="text" placeholder='Search Location' className='bg-[#F5FAFE] rounded-[6px] p-[15px]' />
              <button className='bg-[red] p-[19.1px] rounded-[6px]'><img src="src/assets/nav/search.png " alt="" /></button>
            </div>
          </div>
        </section>



        {/* section 6 */}
        <section className='flex lg:py-[50px] lg:px-[200px] sm:py-[20px] sm:px-[42px] bg-[#F5FAFE] dark:bg-[#232323e2]'>
          <div className='flex justify-between gap-[20px] sm:flex-wrap sm:items-center lg:flex-nowrap'>
            {/* d1 */}
            <div className='d1 pl-[26px] pr-[84px] pt-[140px] pb-[44px] flex flex-col items-start gap-[14px]'>
              <h1 className='text-white text-[18px] w-[155px]'>{t("gh1")}</h1>
              <button className='text-white bg-[red] p-[5px] rounded-[4px] px-[10px]'>{t("btn2")}</button>
            </div>
            {/* d2 */}
            <div className='d2 pl-[26px] pr-[84px] pt-[140px] pb-[44px] flex flex-col items-start gap-[14px]'>
              <h1 className='text-white text-[18px] w-[155px]'>{t("gh1")}</h1>
              <button className='text-white bg-[red] p-[5px] rounded-[4px] px-[10px]'>{t("btn2")}</button>
            </div>
            {/* d3 */}
            <div className='d3 pl-[26px] pr-[84px] pt-[140px] pb-[44px] flex flex-col items-start gap-[14px]'>
              <h1 className='text-white text-[18px] w-[155px]'>{t("gh1")}</h1>
              <button className='text-white bg-[red] p-[5px] rounded-[4px] px-[10px]'>{t("btn2")}</button>
            </div>
            {/* d4 */}
            <div className='d4 pl-[26px] pr-[84px] pt-[140px] pb-[44px] flex flex-col items-start gap-[14px]'>
              <h1 className='text-white text-[18px] w-[155px]'>{t("gh1")}</h1>
              <button className='text-white bg-[red] p-[5px] rounded-[4px] px-[10px]'>{t("btn2")}</button>
            </div>
          </div>
        </section>


        {/* section 7 */}
        <section></section>
      </main>


      {/* footer */}
      <footer></footer>

      <section className='px-[50px] py-[30px] bg-[#F5FAFE] dark:bg-[#232323e2] dark:text-white lg:block sm:hidden'>
        <table className='ml-[260px] my-[50px]'>
        <button className='w-[50px] bg-[green] text-white' onClick={() => {
          setModalAdd(true);
        }}>add</button>
          <tr>
            <th className='pr-[150px]'>Name</th>
            <th className='pr-[150px]'>Age</th>
            <th className='pr-[150px]'>Role</th>
            <th className='pr-[150px]'>Remove</th>
            <th className='pr-[150px]'>Edit</th>

          </tr>
            {todo.map((e) => {
              return (
                <tr key={e.id}>
                  <td><h1>{e.name}</h1></td>
                  <td><p>{e.age}</p></td>
                  <td><p>{e.role}</p></td>
                  <td><button className=' px-[30px] py-[5px] rounded-[5px] ml-[-20px] mt-[2px] bg-[red] text-white' onClick={() => deleteUser(e.id)}>Delete</button></td>
                  <td><button className=' px-[30px] py-[5px] rounded-[5px] ml-[-20px] mt-[2px] bg-[green] text-white' onClick={() => {
                      setModal(true)
                      setIdx(e.id)
                      setEditRole(e.role)
                      setEditName(e.name)
                      setEditAge(e.age)
                    }}>edit</button></td>

                </tr>
              )
            })}
        </table>
        {modal ?
          <div className='flex items-center gap-[14px] absolute top-[4650px] left-[550px] bg-[#686666] p-[45px]'>
            <input type="text" className='bg-[#e6e4e4]' value={editName} onChange={(e) => setEditName(e.target.value)} />
            <input type="text" className='bg-[#e6e3e3]' value={editAge} onChange={(e) => setEditAge(e.target.value)} />
            <input type="text" className='bg-[#e6e3e3]' value={editRole} onChange={(e) => setEditRole(e.target.value)} />
            <button className='w-[50px] bg-[blue] text-white' onClick={() => {
              let obj = {
                name: editName,
                age: editAge,
                role: editRole
              }
              editUser(idx, obj)
              setModal(false)
            }}>Save</button>
          </div> : null}

        {modalAdd ?
          <div className='flex items-center gap-[14px]  absolute top-[4650px] left-[504px] bg-[#686666] p-[45px]'>
            <input type="text" className='bg-[#e6e4e4]' placeholder="name" value={addName} onChange={(e) => setName(e.target.value)} />
            <input type="text" className='bg-[#e6e3e3]' value={addAge} placeholder='age' onChange={(e) => setAge(e.target.value)} />
            <input type="text" className='bg-[#e6e3e3]' value={addRole} placeholder='age' onChange={(e) => setRole(e.target.value)} />
            <button className='w-[50px] bg-[blue] text-white' onClick={() => {
              let user = {
                name: addName,
                age: addAge,
                role: addRole
              }
              setName("")
              setAge("")
              setRole("")
              addUser(user)
              setModalAdd(false)
            }}>Save</button>
          </div> : null}
      </section>
    </>
  )
}

export default App