import React from 'react';

const Modal = props => (
  <div className="modal fade" id={"animal-" + props.animal.id} tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <img src={props.animal.url} />
          <p className="modal-title">{props.animal.type}</p>
          <p><strong>Age: </strong> {props.animal.age}</p>
          <p><strong>Height: </strong> {props.animal.height}</p>
          <p><strong>Weight: </strong> {props.animal.weight}</p>
          <p><strong>Description: </strong> {props.animal.description}</p>
          <button type="button" className="btn btn-primary btn-lg btn-block">Adopt Me Today!</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
