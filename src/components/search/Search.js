import { Input } from 'antd'
import { List } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal'
import React, { useCallback } from 'react'
import './Search.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { showSearch } from '../../store/actions'

const Search = () => {

    const dispatch = useDispatch();

    const product = [
        {
            nameProduct: 'San pham 1',
        },
    ]

    const onHideSearch = useCallback(() => {
        dispatch(showSearch())
    }, [dispatch])

    const handleClickSearch = (e) => {
        e.preventDefault();
    }
    const isShowSearch = useSelector(state => state.showSearch)

    return (
        <div className="box-search">
            <Modal onCancel={onHideSearch} className="modal-search" title="Search products..." visible={isShowSearch}>
                <form>
                    <Input.Group>
                        <Input placeholder='Type product...' />
                        <button type="submit" className="ant-btn" onClick={ e => handleClickSearch(e) }>
                            <SearchOutlined />
                        </button>
                    </Input.Group>
                </form>
                <List>
                    <List.Item>
                        <Link to='/'>
                            { product[0].nameProduct }
                        </Link>
                    </List.Item>
                </List>
            </Modal>
        </div>
    )
}
export default Search;