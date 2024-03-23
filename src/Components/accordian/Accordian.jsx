import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const Accordian = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordian = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='w-full flex flex-col items-center m-4'>
			<div className='w-[1135px] whiteB blackT rounded-lg'>
				<div
					className='border border-white flex justify-between items-center blackB whiteT p-4 rounded-lg cursor-pointer'
					onClick={toggleAccordian}>
					<h2>{data.question}</h2>
					<IoIosArrowUp
						size={28}
						className='greenT '
						style={{
							transform: isOpen
								? 'rotate(0deg)'
								: 'rotate(180deg)',
						}}
					/>
				</div>

				{isOpen && (
					<div className='p-4'>
						<h2>{data.answer}</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default Accordian;
