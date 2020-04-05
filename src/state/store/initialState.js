const initialState = {
  articles: [],
  articleList: true,
  singleArticle: undefined,
  activeItem: 'latest_news',
  selectedCategory: '',
  currentUser: {},
  showForm: false,
  flashMessage: "",
  authenticated: false,
  showLoginForm: false,
  welcomeMessage: "",
  showSignUpForm: false,
  session: { edition: undefined },
  localCity: "Gothenburg",
  localtemperature: "",
  latitude: 11.97,
  longitude: 57.7
};

export default initialState;
