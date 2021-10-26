import {useMemo} from 'react'

 const useSortPosts = (posts, optionValue) => {
	 
	const sortedPosts = useMemo(() => {
		if (optionValue) {
			return [...posts].sort((a, b) =>
				a[optionValue].localeCompare(b[optionValue])
			);
		} else {
			return posts;
		}
	}, [optionValue, posts]);
	return  sortedPosts
	
}




export const usePosts = (posts,inputValue,optionValue) => {
	const sortedPosts = useSortPosts(posts,optionValue)
	const searchInSortedPosts = useMemo(() => {
		return sortedPosts.filter((p) =>
			p.title.toLowerCase().includes(inputValue.toLowerCase())
		);
	}, [inputValue, sortedPosts]);
	return searchInSortedPosts;
	
}
