import React, {forwardRef} from 'react'
import { Input } from 'components/ui'
import { HiOutlineSearch } from 'react-icons/hi'
import debounce from 'lodash/debounce'

const StudentTableSearch = forwardRef((props, ref) => {
    const {onInputChange}  = props
    const debounceFn = debounce(handleDebounceFn, 500)

	function handleDebounceFn(val) {
		onInputChange?.(val)
	}

	const handleInputChange = (e) => {
		debounceFn(e.target.value)
	}
    return (
		<Input
			ref={ref}
			className="max-w-md md:w-52 mb-4 font-vazir" 
			size="sm"
			placeholder="جستجو..." 
			prefix={<HiOutlineSearch className="text-lg" />} 
			onChange={handleInputChange}
		/>
	)
})
export default StudentTableSearch
