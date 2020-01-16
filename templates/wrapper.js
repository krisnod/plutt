class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.mountRef = React.createRef();

    import(/* webpackIgnore: true */ '<remote.js>').then(({ mountApp }) => {
      mountApp(React, ReactDom, this.mountRef.current);
    });
  }

  render() {
    return <div ref={this.mountRef}></div>;
  }
}
