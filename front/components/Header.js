import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = ({children}) => {
    return(
        <div>
            <div>
                <Link href="/index"><a>Main Logo</a></Link>
                <Link href="/dm"><a>DM</a></Link>
                <Link href="/navigation"><a>Navigation</a></Link>
            </div>
            {children}
        </div>
    )
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;