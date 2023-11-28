import { Fragment, useState } from 'react'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
const roles = ['user',"pro-user", "surveyor", 'admin']

const UpdateUserModal = ({
    isOpen,
    setIsOpen,
    modalHandler,
    user,
}) => {
    const [selected, setSelected] = useState(user.role)
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setIsOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex items-center justify-center min-h-full p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full h-56 max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium leading-6 text-center text-gray-900'
                                >
                                    Update User Role
                                </Dialog.Title>
                                <div className='w-full mt-4'>
                                    <Listbox value={selected} onChange={setSelected}>
                                        <div className='relative mt-1'>
                                            <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                                                <span className='block truncate'>{selected}</span>
                                                <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                                                    <AiOutlineDown
                                                        className='w-5 h-5 text-gray-400'
                                                        aria-hidden='true'
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave='transition ease-in duration-100'
                                                leaveFrom='opacity-100'
                                                leaveTo='opacity-0'
                                            >
                                                <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                                                    {roles.map((role, roleIdx) => (
                                                        <Listbox.Option
                                                            key={roleIdx}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                    ? 'bg-amber-100 text-amber-900'
                                                                    : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={role}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {role}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                                                            <BsCheckLg
                                                                                className='w-5 h-5'
                                                                                aria-hidden='true'
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                                <hr className='mt-16 ' />

                                <div className='flex justify-center gap-5 mt-2'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                        onClick={() => modalHandler(selected)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default UpdateUserModal