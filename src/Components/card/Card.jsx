import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import millify from 'millify';

const Card = ({ data = 'fsd' }) => {
	return (
		<>
			<Tooltip id='cardAlbums' />
			<a
				style={{ display: 'block', width: '159px' }}
				data-tooltip-id='cardAlbums'
				data-tooltip-content={data.title}
				data-tooltip-place='top'>
				<div className='w-[159px] h-[232px]' id='cardAlbums'>
					<div className='w-[159px] h-[205px] rounded-[10px] whiteB overflow-hidden'>
						<div className='w-full h-[170px]'>
							<img
								className='w-full h-full object-cover'
								src={data.image}
								alt={data.title}
							/>
						</div>
						<div className='w-[71px] h-[23px] blackB rounded-[50px] mt-[6px] ml-[8px] whiteT flex justify-center items-center'>
							<h2 className='text-[10px] mt-[2px]'>
								{millify(data.follows)} Follows
							</h2>
						</div>
					</div>
					<h2 className='text-[14px] mt-1 font-[400]'>
						{data.title}
					</h2>
				</div>
			</a>
		</>
	);
};

export default Card;
