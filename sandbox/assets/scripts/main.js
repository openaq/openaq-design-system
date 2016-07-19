'use strict';
import React from 'react';
import { render } from 'react-dom';
import OpenAQ from '../../../assets/scripts/index';
var { Modal, ModalHeader, ModalBody, ModalFooter } = OpenAQ.Modal;
var ScrollArea = OpenAQ.ScrollArea;
var Dropdown = OpenAQ.Dropdown;

OpenAQ.hello();

var ModalShowcase = React.createClass({
  displayName: 'ModalShowcase',

  getInitialState: function () {
    return {
      open: false
    };
  },

  openModal: function () {
    this.setState({open: true});
  },

  closeModal: function () {
    this.setState({open: false});
  },

  render: function () {
    return (
      <div>
        <button className='button button--achromic' type='button' onClick={this.openModal}><span>Open Modal</span></button>
        <Modal
          id='modal-showcase'
          className='modal--dark modal--large'
          onCloseClick={this.closeModal}
          revealed={this.state.open} >

          <ModalHeader>
            <div className='modal__headline'>
              <p className='modal__subtitle'>Modal subtitle</p>
              <h1 className='modal__title'>This is the modal title</h1>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className='prose'>
              <p>This modal is currently under development.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ac tellus at rutrum. Duis vestibulum tempor commodo. Phasellus efficitur fermentum quam nec semper. Nulla convallis dui quis ante dapibus, at mollis mi fringilla. Ut sit amet pellentesque nibh.</p>
              <p>Etiam ultrices est a auctor sodales. Ut sit amet feugiat est, id sodales leo. Vestibulum id lorem lectus. Aliquam dictum egestas elementum. Proin blandit auctor justo. Praesent quis odio a justo tempus dictum. Praesent sed nisi dui. Vestibulum velit dui, accumsan quis dui a, iaculis dictum quam.</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='button button--achromic' type='button'><span>Cancel</span></button>
            <button className='button button--base' type='submit'><span>Save</span></button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
});

var renderModal = function () {
  var container = document.querySelector('[data-hook="modal"]');
  if (container === null) return;
  render(<ModalShowcase />, container);
};

renderModal();

// /////////////////////////////////////////////////////////////////////

var renderPanel = function () {
  var container = document.querySelector('[data-hook="scroll"]');
  if (container === null) return;

  var el = React.createElement('div', null,
    <section className='panel'>
      <header className='panel__header'>
        <div className='panel__headline'>
        <h1 className='panel__title'>Panel title lorem ipsum dolor sit amet</h1>
          <div className='panel__subtitle'>Panel subtitle</div>
        </div>
        <div className='panel__meta-actions'>
          <button className='panel__button-dismiss' title='Dismiss panel'><span>Dismiss</span></button>
        </div>
      </header>

        <ScrollArea
          style={{height: '10rem'}}
          speed={1.6}
          className='panel__body'
          contentClassName='panel__body-inner'
          smoothScrolling={true}
          horizontal={false} >

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
        </ScrollArea>

      <footer className='panel__footer'></footer>
    </section>
  );

  render(el, container);
};

renderPanel();

// /////////////////////////////////////////////////////////////////////

var renderDrop = function () {
  var container = document.querySelector('[data-hook="react:drops"]');
  if (container === null) return;

  var el = React.createElement('div', null,
    <Dropdown
      triggerClassName='button button--achromic'
      triggerText='Toggle' >

      <h6 className='drop__title'>This is a title</h6>
      <ul className='drop__menu drop__menu--iconified' role='menu'>
        <li><a href='#' title='This is Item 1a' className='drop__menu-item'><i className='oam-ds-icon-pencil'></i>Edit</a></li>
        <li><a href='#' title='This is Item 2a' className='drop__menu-item drop__menu-item--example-icon'>Download</a></li>
      </ul>
      <ul className='drop__menu drop__menu--iconified' role='menu'>
        <li><a href='#' title='This is Item 1a' className='drop__menu-item delete'><i className='oam-ds-icon-trash-bin'></i>Delete</a></li>
      </ul>

    </Dropdown>,

    <Dropdown
      className='drop__content--special'
      triggerElement='a'
      triggerClassName='button button--achromic drop__toggle drop__toggle--caret'
      triggerTitle='Show/hide options'
      triggerText='Toggle'
      direction='up'
      aligment='left' >

      <ul className='drop__menu' role='menu'>
        <li><a href='#' title='This is Item 1a' className='drop__menu-item'>Item 1a</a></li>
        <li><a href='#' title='This is Item 2a' className='drop__menu-item'>Item 2a</a></li>
      </ul>
      <ul className='drop__menu' role='menu'>
        <li><a href='#' title='This is Item 1b' className='drop__menu-item'>Item 1b</a></li>
        <li><a href='#' title='This is Item 2b' className='drop__menu-item'>Item 2b</a></li>
      </ul>
      <div className='drop__inset'>
        <p>This is a drop inset.</p>
      </div>

    </Dropdown>
  );

  render(el, container);
};

renderDrop();
