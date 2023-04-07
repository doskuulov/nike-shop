import { Link } from 'react-router-dom'
import {IoMdExit, IoFastFoodOutline} from 'react-icons/io'
import {BsBoxArrowInDownLeft, BsHouseDoor, BsSearch} from 'react-icons/bs'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import {GiAirplaneDeparture, GiLargeDress} from 'react-icons/gi'
import {SlScreenSmartphone} from 'react-icons/sl'
import {TbMoodKid, TbBrandSupabase} from 'react-icons/tb'
import {AiOutlineStock} from 'react-icons/ai'
import {MdOutlineWorkspacePremium, MdFoodBank} from 'react-icons/md'
import styles from '../components/Header.module.scss'

const Header = ({ value, setValue, allItems }) => {
	return (
		<header className={styles.header}>
			{/* Top Nav */}
			<div className={styles.header__top}>
				<Link to={'/'}>
					<div className={styles.top__nav}>
						<img
							width={150}
							height={40}
							src='https://cdn1.ozone.ru/s3/cms/1a/ta9/wc200/doodle_1_2.png'
							alt='Ozon Logo'
							className={styles.fill}
						/>
					</div>
				</Link>
				<div className={styles.search__bar}>
					<input placeholder='Искать на Ozon' value={value} onChange={e => setValue(e.target.value)} />
					<BsSearch size={26}/>
				</div>
				<div className={styles.top__right}>
					<div className={styles.right__left}>
						<IoMdExit size={24}/>
						<p>Sing in</p>
					
					</div>
					<div className={styles.right__middle}>
						<BsBoxArrowInDownLeft size={21}/> 
						<p>Box</p>
						{/* <p className={styles.p__t}>& Orders</p> */}
					</div>
					<Link to={'basket'}>
						<div className={styles.right__top}>
							<RiShoppingBasket2Line size={24}/>
							<p className={styles.p__t}>Cart</p>
						</div>
					</Link>
				</div>
			</div>
			{/* Bottom Nav */}
			<div className={styles.bottom__nav}>
				<p>
					All
				</p>
				<p className={`link ${styles.details}`}>
				<GiAirplaneDeparture size={17}/>	Билеты, отели, туры</p>
				<p className={`link ${styles.details}`}>
				<GiLargeDress size={15}/>	Одежда и обувь</p>
				<p className={`link ${styles.details}`}>
				<SlScreenSmartphone size={15}/>	Электроника</p>
				<p className={`link ${styles.details} cost`}>
					<BsHouseDoor size={16}/>Дом и сад</p>
				<p className={`link ${styles.details} cost`}>
				<TbMoodKid size={17}/>	Детские товары</p>
				<p className={`link ${styles.details} cost`}>
					<AiOutlineStock size={19}/>	Акции
				</p>
				<p className={`link ${styles.details} cost`}>
				<MdOutlineWorkspacePremium size={17}/>	Premium</p>
				<p className={`link ${styles.details} cost`}>
					<TbBrandSupabase size={17}/>	Бренды</p>
					<p className={`link ${styles.details} cost`}>
					<MdFoodBank size={17}/>	Продукты питания</p>
			</div>
		</header>
	)
}

export default Header