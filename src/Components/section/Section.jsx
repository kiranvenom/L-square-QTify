import { useEffect, useState } from 'react';
import Card from '../card/Card';
import { getData } from '../../api/api';

import { FaCircleChevronLeft } from 'react-icons/fa6';
import { FaCircleChevronRight } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import Loading from '../loading/Loading';

const Section = ({ title, route }) => {
	let newTitle = title.split(' ');

	const [card, setCard] = useState([]);
	const [showAll, setShowAll] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getData(route)
			.then((res) => {
				setCard(res);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			});
	}, []);

	const handleToggleShow = () => {
		setShowAll(!showAll);
	};

	return (
		<>
			<div className='blackB whiteT'>
				<div className='w-[1384px] m-auto'>
					<div className='flex justify-between mb-4 pt-10'>
						<h1 className='text-[20px] font-[600]'>{title}</h1>
						<h1
							onClick={handleToggleShow}
							className='text-[20px] greenT font-[600] cursor-pointer'>
							{showAll ? 'Collapse' : 'Show all'}
						</h1>
					</div>

					{isLoading ? (
						<Loading />
					) : showAll ? (
						<div className='flex gap-4 flex-wrap'>
							{card.map((c) => (
								<Card key={c.id} data={c} />
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
										<Card data={c} />
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
