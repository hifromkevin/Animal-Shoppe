import React from 'react';

const Bio = props => (
    <div className="col-lg-3 col-md-4 col-sm-6">
    <div className=" animal-bio">
      <img src={props.animal.url} data-toggle="modal" data-target={"#animal-" + props.animal.id} />
      <p className="animal-name">{props.animal.type}</p>

      <div class="container">
        <div class="row">
          <div class="col-4">      
            <p className="bio-section"><strong><i className="fas fa-birthday-cake"></i> </strong> <br />
              <span>{props.animal.age}</span>
            </p>
          </div>
          <div class="col-4">      
            <p className="bio-section"><strong><i class="fas fa-arrows-alt-v"></i> </strong> <br />
              <span>{props.animal.height}</span>
            </p>
          </div>
          <div class="col-4">      
            <p className="bio-section"><strong><i class="fas fa-balance-scale"></i> </strong> <br />
              <span>{props.animal.weight}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>

);

export default Bio;

// <strong><i className="fas fa-paw"></i> </strong>