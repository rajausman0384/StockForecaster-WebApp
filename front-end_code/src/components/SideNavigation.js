import React from 'react';
import {
  MDBSideNavLink,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBIcon
} from 'mdbreact';

class SideNavigation extends React.Component {
  // render MDBSideNav Link
  rSNL(to, text) {
    return (
      <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
        {text}
      </MDBSideNavLink>
    );
  }

  render() {
    const { onLinkClick } = this.props;
    return (
      <div className='white-skin'>
        <MDBSideNav
          logo='https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-react.png'
          bg='https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg'
          mask='strong'
          fixed
          breakWidth={this.props.breakWidth}
          triggerOpening={this.props.triggerOpening}
          style={{ transition: 'padding-left .3s' }}
        >
          <form role='search' className='search-form'>
            <div className='form-group md-form mt-0 pt-1 ripple-parent'>
              <input
                type='text'
                placeholder='Search'
                className='form-control'
              />
            </div>
          </form>
          <MDBSideNavNav>
            <MDBSideNavCat
              name='Dashboards'
              id='dashboard-cat'
              icon='tachometer-alt'
            >
              {this.rSNL('/dashboards/v1', 'Version 1')}
              {this.rSNL('/dashboards/v2', 'Version 2')}
              {this.rSNL('/dashboards/v3', 'Version 3')}
              {this.rSNL('/dashboards/v4', 'Version 4')}
              {this.rSNL('/dashboards/v5', 'Version 5')}
              {this.rSNL('/dashboards/v6', 'Version 6')}
            </MDBSideNavCat>

            <MDBSideNavCat name='Pages' id='pages-cat' icon='image'>
              {this.rSNL('/pages/login', 'Login')}
              {this.rSNL('/pages/register', 'Register')}
              {this.rSNL('/pages/pricing', 'Pricing')}
              {this.rSNL('/pages/lock', 'Lock')}
              {this.rSNL('/pages/about', 'About us')}
              {this.rSNL('/pages/post', 'Single post')}
              {this.rSNL('/pages/posts', 'Post listing')}
              {this.rSNL('/pages/landing', 'Landing page')}
              {this.rSNL('/pages/customers', 'Customers')}
              {this.rSNL('/pages/invoice', 'Invoice')}
              {this.rSNL('/pages/chat', 'Chat')}
              {this.rSNL('/pages/support', 'Support')}
              {this.rSNL('/pages/page-creator', 'Page creator')}
            </MDBSideNavCat>

            <MDBSideNavCat name='Profile' id='profile-cat' icon='user'>
              {this.rSNL('/profile/v1', 'Basic 1')}
              {this.rSNL('/profile/v2', 'Basic 2')}
              {this.rSNL('/profile/extended', 'Extended')}
            </MDBSideNavCat>

            <MDBSideNavCat name='CSS' id='css-cat' iconBrand icon='css3'>
              {this.rSNL('/css/grid', 'Grid system')}
              {this.rSNL('/css/media', 'Media object')}
              {this.rSNL('/css/utilities', 'Utilities')}
              {this.rSNL('/css/code', 'Code')}
              {this.rSNL('/css/icons', 'Icons')}
              {this.rSNL('/css/images', 'Images')}
              {this.rSNL('/css/typography', 'Typography')}
              {this.rSNL('/css/colors', 'Colors')}
              {this.rSNL('/css/masks', 'Masks')}
              {this.rSNL('/css/hover', 'Hover effects')}
              {this.rSNL('/css/shadows', 'Shadows')}
              {this.rSNL('/css/animations', 'Animations')}
            </MDBSideNavCat>

            <MDBSideNavCat name='Components' id='components-cat' icon='th'>
              {this.rSNL('/components/buttons', 'Buttons')}
              {this.rSNL('/components/cards', 'Cards')}
              {this.rSNL('/components/list', 'List group')}
              {this.rSNL('/components/panels', 'Panels')}
              {this.rSNL('/components/progress', 'Progress bars')}
              {this.rSNL('/components/popovers', 'Popovers')}
              {this.rSNL('/components/tooltips', 'Tooltips')}
              {this.rSNL('/components/tabs', 'Tabs & pills')}
              {this.rSNL('/components/tags', 'Tags, labels & badges')}
              {this.rSNL('/components/date', 'Date picker')}
              {this.rSNL('/components/time', 'Time picker')}
              {this.rSNL('/components/stepper', 'Stepper')}
              {this.rSNL('/components/pagination', 'Pagination')}
              {this.rSNL('/components/collapse', 'Collapse')}
            </MDBSideNavCat>

            <MDBSideNavCat name='Forms' id='forms-cat' icon='check-square'>
              {this.rSNL('/forms/basic', 'Basic')}
              {this.rSNL('/forms/extended', 'Extended')}
              {this.rSNL('/forms/validation', 'Validation')}
            </MDBSideNavCat>

            <MDBSideNavCat name='Tables' id='tables-cat' icon='table'>
              {this.rSNL('/tables/basic', 'Basic')}
              {this.rSNL('/tables/extended', 'Extended')}
              {this.rSNL('/tables/datatable', 'Datatable')}
            </MDBSideNavCat>

            <MDBSideNavCat name='Maps' id='maps-cat' icon='map'>
              {this.rSNL('/maps/google', 'Google')}
              {this.rSNL('/maps/full', 'Full screen map')}
              {this.rSNL('/maps/vector', 'Vector world map')}
            </MDBSideNavCat>

            <MDBSideNavLink topLevel to='/alerts' onClick={onLinkClick}>
              <MDBIcon icon='bell mr-2' />
              Alerts
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to='/modals' onClick={onLinkClick}>
              <MDBIcon icon='bolt mr-2' />
              Modals
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to='/charts' onClick={onLinkClick}>
              <MDBIcon icon='chart-pie mr-2' />
              Charts
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to='/calendar' onClick={onLinkClick}>
              <MDBIcon icon='calendar-check mr-2' />
              Calendar
            </MDBSideNavLink>

            <MDBSideNavLink topLevel to='/sections' onClick={onLinkClick}>
              <MDBIcon icon='th-large mr-2' />
              Sections
            </MDBSideNavLink>
          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default SideNavigation;
