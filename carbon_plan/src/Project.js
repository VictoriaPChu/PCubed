import React from 'react';

function Project() {

  return (
    <div className="project">
      <h1>Planning</h1>
      <form>
              <div className="field">
                <label className="label">Budget</label>
                <div className="control">
                  <input className="input" type="number" name="number" required />
                </div>
              </div>
              <div className="field">
                <label className="label">Duration</label>
                <div className="control">
                  <input className="input" type="password" name="password" required />
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Get Recommendations</button>
      </form>

    </div>
  );

}

export default Project;