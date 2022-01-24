import './App.css';

function PaginaLogin() {

  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoURL
    }

    setUser(newUser);

  }

  if (user === null) {
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    );
  }

  return (
    <BrowserRouter>
        <Header user={user} />

        <Routes />

        <Footer />
    </BrowserRouter>
  );
}

export default PaginaLogin;