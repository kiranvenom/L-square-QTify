import { useEffect, useState } from 'react';
import Accordian from '../accordian/Accordian';
import api, { getData } from '../../api/api';

const Faq = () => {
	const [qa, setqa] = useState([]);

	useEffect(() => {
		getData(api.faq).then((res) => setqa(res.data));
	}, []);

	return (
		<div className='blackB whiteT pt-10'>
			<div className='max-w-[1135px] m-auto flex items-center flex-col justify-between'>
				<h2 className='font-bold text-4xl mb-10'>FAQs</h2>

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
