import './App.css';

import { useState, useMemo } from 'react';

import CardList from './components/CardList';

import Myform from './components/Myform';

import Postfilter from './components/Postfilter';
import Notfound from './components/UI/Notfound';

function App() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			description: 'Javascript its a programm language',
			name: 'Javascript',
		},
		{
			id: 2,
			description: 'Javascript its a programm language',
			name: 'Javascript',
		},
		{
			id: 3,
			description: 'Javascript its a programm language',
			name: 'Javascript',
		},
		{
			id: 4,
			description: 'Javascript its a programm language',
			name: 'Javascript',
		},
	]);

  const [filter, setFilter] = useState({inputValue:'', optionValue: ''})
	{
		/* спускаем в дочерний компонент и коллбэком вызываем*/
	}
	const createPost = (postData) => {
		setPosts([
			...posts,
			{ id: posts.length + 1, key: Date.now(), ...postData },
		]);
	};


  

	{
		/*используем, чтобы onChange не срабатывал при каждом вводе*/
	}
	const sortedPosts = useMemo(() => {
		if (filter.optionValue) {
			return [...posts].sort((a, b) =>
				a[filter.optionValue].localeCompare(b[filter.optionValue])
			);
		} else {
			return posts;
		}
	}, [filter.optionValue, posts]);
	{
		/* массив зависимостей, при изменеии одного из них пересчитывается константа */
	}

	{
		/*сюда передаем отсортированный массив по option и потом с помощтю includes организовываем поиск, в качестве значения передает state input.
Зависимости, стэйт инпута и изменения в переменной с sortedPosts. Чтобы поиск не был чувствителен к регистру добавляем toLowerCase*/
	}
	const searchInSortedPosts = useMemo(() => {
		return sortedPosts.filter((p) =>
			p.name.toLowerCase().includes(filter.inputValue.toLowerCase())
		);
	}, [filter.inputValue, sortedPosts]);

	{
		/* тут  удаляю пост по уникальному key, который генерирую из Date.now() */
	}
	const delPosts = (item) => {
		setPosts(posts.filter((p) => p.key !== item.key));
		console.log(posts.length);
	};
	{
		/* функция сортировки */
	}


	return (
		<div>
			<Myform createPost={createPost} />
			<Postfilter filter = {filter} setFilter={setFilter}/>
			{searchInSortedPosts.length !== 0 ? (
				<CardList
					posts={searchInSortedPosts}
					delPosts={delPosts}
					title={'Posts List'}
				/>
			) : (
				<Notfound/>
			)}
		</div>
	);
}

export default App;
