import React, { Component } from 'react';
import '../css/Tabs.css';

class Tabs extends Component {
  render() {
    return (
      <div className="Tabs">
        {React.Children.map(this.props.children, (child, i) => {
          //Set active styling
          let styles = 'TabsBtn';
          if (child.key === this.props.active) {
            styles = `${styles} TabsBtn--active`;
          }
          return (
            <button
              className={styles}
              onClick={() => {this.props.onChange(child.key);}}>{child}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Tabs;
