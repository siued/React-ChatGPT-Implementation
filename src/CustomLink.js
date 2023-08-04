import React from 'react';
import { Link } from 'react-router-dom';

class CustomLink extends React.Component {
    render = () => (
        <Link to={this.props.to} className="px-10 py-2 transition-all duration-300 hover:bg-black hover:text-slate-400">
            {this.props.children}
        </Link>
    );
}

export default CustomLink;
