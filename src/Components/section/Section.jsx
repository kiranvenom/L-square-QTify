import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import api, { getData } from '../../api/api';

import { FaCircleChevronLeft } from 'react-icons/fa6';
import { FaCircleChevronRight } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import Loading from '../loading/Loading';

const Section = ({ title, route, type = false }) => {
	let newTitle = title.split(' ');

	const [originalCards, setOriginalCards] = useState([]);
	const [card, setCard] = useState([]);
	const [genres, setGenres] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const [activeGenre, setActiveGenre] = useState('all');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getData(route)
			.then((res) => {
				setCard(res);
				setOriginalCards(res);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			});

		if (type) {
			getData(api.genres)
				.then((res) => {
					setGenres(res);
				})
				.catch((error) => {
					console.error('Error fetching data:', error);
				});
		}
	}, []);

	const handleToggleShow = () => {
		setShowAll(!showAll);
	};

	const handleGenre = (genreKey) => {
		setActiveGenre(genreKey); // Update active genre
		if (type) {
			if (genreKey === 'all') {
				setCard(originalCards);
			} else {
				let filteredCards = originalCards.filter(
					(c) => c.genre.key === genreKey,
				);
				setCard(filteredCards);
			}
		}
	};

	return (
		<>
			<div className='blackB whiteT'>
				<div className='w-[1384px] m-auto'>
					<div className='flex justify-between mb-4 pt-10'>
						<h1 className='text-[20px] font-[600]'>{title}</h1>
						{!type && (
							<>
								{!isLoading && (
									<h1
										onClick={handleToggleShow}
										className='text-[20px] greenT font-[600] cursor-pointer'>
										{showAll ? (
											<h3>Collapse</h3>
										) : (
											<h3>Show all</h3>
										)}
									</h1>
								)}
							</>
						)}
					</div>

					{type && (
						<div>
							<ul className='w-[331px] flex justify-between font-[16px] mb-8'>
								<li
									onClick={() => handleGenre('all')}
									className={
										activeGenre === 'all'
											? 'cursor-pointer active'
											: 'cursor-pointer'
									}>
									All
								</li>
								{genres.data?.map((genre) => (
									<li
										key={genre.key}
										className={
											activeGenre === genre.key
												? 'cursor-pointer active'
												: 'cursor-pointer'
										}
										onClick={() => handleGenre(genre.key)}>
										{genre.label}
									</li>
								))}
							</ul>
						</div>
					)}

					{isLoading ? (
						<Loading />
					) : showAll ? (
						<div className='flex gap-4 flex-wrap'>
							{card.map((c) => (
								<Card type={type} key={c.id} data={c} />
							))}
						</div>
					) : (
						<div className='relative'>
							<FaCircleChevronLeft
								className={`absolute top-[35%] left-[-1%] whiteB rounded-full cursor-pointer z-10 next-${newTitle[0]}`}
								size={32}
								color='green'
							/>
							<FaCircleChevronRight
								className={`absolute top-[35%] right-[-0.5%] whiteB rounded-full cursor-pointer z-10 prev-${newTitle[0]}`}
								size={32}
								color='green'
							/>
							<Swiper
								slidesPerView={8}
								navigation={{
									nextEl: `.prev-${newTitle[0]}`,
									prevEl: `.next-${newTitle[0]}`,
								}}
								modules={[Navigation]}>
								{card.map((c) => (
									<SwiperSlide key={c.id}>
										<Card type={type} data={c} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Section;
