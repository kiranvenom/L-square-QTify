import { useEffect, useState } from 'react';
import Card from '../card/Card';
import { getData } from '../../api/api';

import { FaCircleChevronLeft } from 'react-icons/fa6';
import { FaCircleChevronRight } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const Section = ({ title, route }) => {
	const [card, setcard] = useState([]);
	const [showAll, setshowAll] = useState(true);

	useEffect(() => {
		getData(route).then((res) => setcard(res));
	}, []);

	const handleToggleShow = () => {
		setshowAll(!showAll);
	};

	return (
		<>
			<div className='blackB whiteT'>
				<div className='w-[1384px] m-auto '>
					<div className='flex justify-between items-center mb-6'>
						<h1 className='text-[20px] font-[600]'>{title}</h1>
						<h1
							onClick={handleToggleShow}
							className='text-[20px] greenT font-[600]'>
							{showAll ? 'Collapse' : 'Show All'}
						</h1>
					</div>

					{showAll ? (
						<div className='flex gap-4 flex-wrap'>
							{card.map((c) => (
								<Card key={c.id} data={c} />
							))}
						</div>
					) : (
						<div className='relative'>
							<FaCircleChevronLeft
								className='absolute top-[35%] left-[-1%] whiteB rounded-full cursor-pointer z-10 swiper-button-next'
								size={32}
								color='green'
							/>
							<FaCircleChevronRight
								className='absolute top-[35%] right-[-0.5%] whiteB rounded-full cursor-pointer z-10 swiper-button-prev'
								size={32}
								color='green'
							/>
							<Swiper
								slidesPerView={8}
								navigation={{
									nextEl: '.swiper-button-prev',
									prevEl: '.swiper-button-next',
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

					{/* <div className='flex gap-4 flex-wrap'>
						{card.map((c) => (
							<Card key={c.id} data={c} />
						))}
					</div> */}

					{/* <div className='relative'>
						<FaCircleChevronLeft
							className='absolute top-[35%] left-[-1%] whiteB rounded-full cursor-pointer z-10 swiper-button-next'
							size={32}
							color='green'
						/>
						<FaCircleChevronRight
							className='absolute top-[35%] right-[-1%] whiteB rounded-full cursor-pointer z-10 swiper-button-prev'
							size={32}
							color='green'
						/>
						<Swiper
							slidesPerView={8}
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}}
							modules={[Navigation]}>
							{card.map((c) => (
								<SwiperSlide key={c.id}>
									<Card data={c} />
								</SwiperSlide>
							))}
						</Swiper>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Section;
