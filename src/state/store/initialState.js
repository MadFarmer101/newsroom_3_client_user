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
  city: undefined,
  weather: undefined,
  temp: undefined
 
};

export default initialState;
