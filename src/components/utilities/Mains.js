class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: !!localStorage.getItem("token") || null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      this.setState({
        auth: true
      });
    } else {
      this.setState({ auth: false });
    }
    // debugger;
  }
  render() {
    const { auth } = this.state;
    const { authenticated } = this.props;

    console.log({ auth, authenticated });
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
            <PrivateRoute
              path="/user/artwork"
              authenticated={auth || authenticated}
              component={Artwork}
            />
            <PrivateRoute
              path="/user/profile"
              authenticated={auth || authenticated}
              component={Myprofile}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log("msptt ", state);
  return {
    authenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps, null)(Main);
// .git file

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
node_modules
/.pnp
.pnp.js

.vscode
packages/react-devtools-extensions/chrome/build
packages/react-devtools-extensions/chrome/*.crx
packages/react-devtools-extensions/chrome/*.pem
packages/react-devtools-core/dist
# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*


