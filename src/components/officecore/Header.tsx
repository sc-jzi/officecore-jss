import React, { Component } from 'react';
import { Image, Text, resetEditorChromes } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from '../../utils/ActiveLink';
import { HeaderProps } from 'lib/officecore-props';

class Navbar extends Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }
  // Search Form
  state = {
    searchForm: false,
  };
  handleSearchForm = () => {
    this.setState(prevState => {
      return {
        searchForm: !prevState.searchForm
      };
    });
  }

  useEffect = () => {
    resetEditorChromes();
  }

  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href={this.props.fields.data.layout.item.url.path}>
                  <a className="navbar-brand">
                    <Image field={this.props.fields.data.item.LightLogo.jsonValue} className="main-logo" />
                    <Image field={this.props.fields.data.item.DarkLogo.jsonValue} className="optional-logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {this.props.fields.data.layout.item.children.results.map((child, index:number) => ( 
                      <li className="nav-item" key={index}>
                        <Link href={child.url.path} activeClassName="active">
                          <a className="nav-link" >
                          <Text field={child.pageTitle} /> <i className="fas fa-chevron-down"></i>
                          </a>
                        </Link>
                        {/* TODO: Should add check to see whether there are children */}
                        <ul className="dropdown-menu">
                          {child.children.results.map((c, i:number) => ( 
                            <li className="nav-item" key={i}>
                              <Link href={c.url.path} activeClassName="active">
                                <a className="nav-link"><Text field={c.pageTitle}/></a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>

                  {/*TODO: implement other options*/}
                  <div className="others-options">
                    <Link href="/cart">
                      <a className="cart-btn">
                        <i className="flaticon-commerce-and-shopping"></i>
                        <span>1</span>
                      </a>
                    </Link>

                    <div className="option-item">
                      <i
                        onClick={this.handleSearchForm}
                        className="search-btn flaticon-search"
                        style={{
                          display: this.state.searchForm ? 'none' : 'block'
                        }}
                      ></i>

                      <i
                        onClick={this.handleSearchForm}
                        className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                      ></i>

                      <div
                        className="search-overlay search-popup"
                        style={{
                          display: this.state.searchForm ? 'block' : 'none'
                        }}
                      >
                        <div className='search-box'>
                          <form className="search-form">
                            <input className="search-input" name="search" placeholder="Search" type="text" />
                            <button className="search-button" type="submit">
                              <i className="fas fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <a className="btn btn-primary">Schedule a Demo</a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;


// import React, { useEffect } from 'react';
// import { Image, ImageField, Text, useComponentProps, resetEditorChromes, GetStaticComponentProps, constants, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
// import config from 'temp/config';

// import {
//   HeaderQueryDocument,
//   HeaderQueryQuery as HeaderDS,
// } from '../graphql/Officecore-Header.dynamic.graphql';

// type HeaderData = {
//   datasource: HeaderDS
// };

// const  Header = (props: HeaderData): JSX.Element => {
//   const data = useComponentProps<HeaderData>(props.rendering.uid);

//   const navItems = data.props.datasource.layout.item;
//   const headerSettings = data?.props.datasource.item;
//   const imgfield  = headerSettings.field.jsonValue as ImageField;

//   useEffect(() => {
//     resetEditorChromes();
//   }, []);

//   return (
//     <div className="header">
//       <div className="container">
//         <a href="/" className="site-logo">
//           <Image media={imgfield} />
//         </a>

//         <div className="header-navigation pull-right font-transform-inherit">
//           <ul>
//             <li>
//               <a href={navItems.url.path}>
//                 <Text field={navItems.pageTitle.jsonValue} />
//               </a>
//             </li>
//             {navItems.children.results.map((child, id) => ( 
//               <li key={id}>
//                 <a href={child.url.path}>
//                   <Text field={child.pageTitle.jsonValue} />
//                 </a>
//               </li> 
//             ))}  
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// /**
//  * Will be called during SSG
//  * @param {ComponentRendering} rendering
//  * @param {LayoutServiceData} layoutData
//  * @param {GetStaticPropsContext} context
//  */
// export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData) => {
//   if (process.env.JSS_MODE === constants.JSS_MODE.DISCONNECTED) {
//     return null;
//   }

//   const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
//     apiKey: config.sitecoreApiKey,
//   });

//   const datasource = await graphQLClient.request<HeaderData>(HeaderQueryDocument, {
//     datasource: rendering.dataSource,
//     site: "officecore",
//     language: layoutData?.sitecore?.context?.language,
//   });

//   return { props: { datasource } }

//   // In a non-Sitecore world this could look something like this:
//   // const fetchUrl = "https://your.endpoint.com/";

//   //   const fetchOptions = {
//   //     method: "POST",
//   //     headers: {
//   //       Authorization: `Bearer ${process.env.ACCESS_TOKEN_HERE}`,
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({ query }),
//   //   };

//   //   try {
//   //     const data = await fetch(fetchUrl, fetchOptions).then((response) =>
//   //       response.json(),
//   //     );
//   //     return data;
//   //   } catch (error) {
//   //     throw new Error("Something bad happened");jss
//   //   } 
// };

// export default Header;