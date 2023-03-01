import {useState} from "react";
import building from "../../../../assets/images/icons/building.png";
import floor from "../../../../assets/images/icons/floor.png";
import door from "../../../../assets/images/icons/door.png";
import desktop from "../../../../assets/images/icons/desktop.png";
import powersupply from "../../../../assets/images/icons/power-supply.png";
import drive from "../../../../assets/images/icons/drive.png";
import memory from "../../../../assets/images/icons/memory.png";
import processor from "../../../../assets/images/icons/processor.png";
import motherboard from "../../../../assets/images/icons/motherboard.png";
import computercase from "../../../../assets/images/icons/computer_case.png";
import cooler from "../../../../assets/images/icons/cooler.png";

const icons = {
    building,
    floor,
    door,
    desktop,
    powersupply,
    drive,
    memory,
    processor,
    motherboard,
    computercase,
    cooler,
};

const ItemGroup = (item) => {
    const [opened, setOpened] = useState(false)

    return (
        <div className='flex items-center gap-1' key={item?.key}>
            <button type='button' className='p-1' onClick={() => setOpened(!opened)}>
                {opened ? <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-4 h-4 text-gray-400'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg> : <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-4 h-4 text-gray-400'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg>
                }

            </button>
            <button type='button' className='p-1'>
                <div className='flex items-center gap-3' key={item?.key}>
                    <img src={icons[item?.icon]} alt='Значок' className='h-4 w-4' />
                    <p className='text-gray-700 text-sm'>{item?.name}</p>
                </div>
            </button>
        </div>
    )
}

export default ItemGroup