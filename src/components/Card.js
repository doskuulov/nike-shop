import React from 'react'
import styles from '../components/Card.module.scss'

const Card = () => {
  return (
    <>
    <div className={styles.ff}>
        <h1>Только до 19.04!</h1>
        <button>Успей купить</button>
    </div>
    
	<div className={styles.bmw}>
    <div className={styles.cart__wrapper}>
					<div className={styles.cart__top}>
						<img width={100} src='https://cdn1.ozone.ru/s3/multimedia-7/wc250/6234904939.jpg' alt='Cart Item' />
					</div>
					<div className={styles.cart__bottom}>
						<div className={styles.cart__add}>
							<p>4 184,34 с</p>
							<del>7909,2</del>
						</div>
						<h3 className={styles.cart__title}>Подгузники детские YokoSun, Размер 3 / М (5-10 кг), SuperMegaBox 248 шт</h3>
						<p className={styles.cart__price}>В корзину</p>
						
						<div className={styles.cart__foot}>
							<p>14 апреля,</p>
							<span>Азия Лайф</span>
						</div>
					</div>
				</div>

				</div>
</>
                
  )
}

export default Card