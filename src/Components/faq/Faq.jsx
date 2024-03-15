import { useEffect, useState } from 'react';
import Accordian from '../accordian/Accordian';
import data from '/src/data/data.js';

const Faq = () => {
	const [qa, setqa] = useState([]);

	useEffect(() => {
		setqa(data);
	}, []);

	return (
		<div className='blackB whiteT py-10'>
			<div className='max-w-[1135px] h-[345px] m-auto flex items-center flex-col justify-between'>
				<h2 className='font-bold text-4xl'>FAQs</h2>

				<div className='w-full'>
					{qa.map((q) => (
						<Accordian key={q.id} data={q} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Faq;
