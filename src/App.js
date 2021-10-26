import './App.css';

import { useState, useEffect} from 'react';

import CardList from './components/CardList';

import Myform from './components/Myform';

import Postfilter from './components/Postfilter';
import Notfound from './components/UI/Notfound';
import { Mymodal } from './components/UI/Mymodal/Mymodal';
import Mybutton from './components/UI/Button/Mybutton';
import { usePosts } from './hooks/usePosts.js';
import { useAxios } from './hooks/useAxios';
import axios from 'axios';

function App() {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({ inputValue: '', optionValue: '' });
	const [modal, setModal] = useState(false);

	{
		/* спускаем в дочерний компонент и коллбэком вызываем*/
	}
	const createPost = (postData) => {
		setPosts([
			...posts,
			{ id: posts.length + 1, key: Date.now(), ...postData },
		]);
		setModal(false);
	};


	useEffect(()=>{
		fetchData()
	}, [])





	async function fetchData() {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		setPosts(response.data)
	}

	// const fetchData = useAxios()


	const searchInSortedPosts = usePosts(
		posts,
		filter.inputValue,
		filter.optionValue
	);

	{
		/* тут  удаляю пост по уникальному key, который генерирую из Date.now() */
	}
	const delPosts = (item) => {
		setPosts(posts.filter((p) => p.id !== item.id));
		console.log(posts.length);
	};
	{
		/* функция сортировки */
	}

	return (
		<div>
			<button onClick={fetchData}>fetch</button>
			<Mybutton onClick={() => setModal(true)}>Создать пост</Mybutton>
			<Mymodal visible={modal} setVisible={setModal}>
				<Myform createPost={createPost} />
			</Mymodal>

			<Postfilter filter={filter} setFilter={setFilter} />
			{searchInSortedPosts.length !== 0 ? (
				<CardList
					posts={searchInSortedPosts}
					delPosts={delPosts}
					title={'Posts List'}
				/>
			) : (
				<Notfound />
			)}
		</div>
	);
}

export default App;
