import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { getCatsFetch } from '../../store/reducers/counterSlice';
import s from './styles/style.module.css'


export function Counter() {
	const dispatch = useAppDispatch();
	const { cats } = useAppSelector(state => state.catsReducer)

	const getCats = () => {
		dispatch(getCatsFetch())
	}

	return (
		<div className={s.wrapper}>
			<button className={s.btn} onClick={getCats}>get cats</button>
			<ul  className={s.cardsWrapper}>
				{cats.map(cat => 
				<li  className={s.card} key={cat.id}>
					<div>
						<h2>{cat.name}</h2>
						<div>{cat.description}</div>
					</div>
					<div   className={s.imgWrapper}>
						<img src={cat.image.url} alt='cat img' />
					</div>
				</li>)}
			</ul>
		</div>
	);
}
