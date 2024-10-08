import Graph1 from '../components/graph';

export default function Test() {
  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
        />
      </header>

      <section className="hero is-full-height has-background-white p-5">
        <div className="container">
          <div className="columns">
            <div className="column is-half has-text-centered has-text-black">
              <div id="box3" className="box has-text-black has-background-white">
              <h3 className="subtitle is-3 level-item has-text-centered has-text-black">List of People</h3>

                <div className="section level">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src="./data/rachel.jpeg"
                      alt="Person"
                    />
                  </figure>
                  <h3 className="subtitle is-3 level-item has-text-centered has-text-black">
                    <a href='https://www.linkedin.com/in/rcjan/'>Rachel Jan</a>
                  </h3>
                </div>

                <div className="section level">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src="./data/jophy.jpeg"
                      alt="Person"
                    />
                  </figure>
                  <h3 className="subtitle is-3 level-item has-text-centered has-text-black">
                    <a href="https://www.linkedin.com/in/jophy-ye-18063b2b6/">Jophy Ye</a>
                  </h3>
                </div>

                <div className="section level">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src="./data/alvin.jpeg"
                      alt="Person"
                    />
                  </figure>
                  <h3 className="subtitle is-3 level-item has-text-centered has-text-black">
                    <a href="https://www.linkedin.com/in/alvinryanputra/">Alvin Ryanputra</a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="column is-half has-text-centered">
              <div id="box3" className="box has-background-white">
              <h3 className="subtitle is-3 level-item has-text-centered has-text-black">Search</h3>
                <div className="field">
                  <label className="label has-text-black">Filter by</label>
                  <div className="control has-text-black">
                    <label className="checkbox">
                      <input type="checkbox" /> Interests
                    </label>
                  </div>

                  <div className="control has-text-black">
                    <label className="checkbox">
                      <input type="checkbox" /> Companies
                    </label>
                  </div>

                  <div className="control has-text-black">
                    <label className="checkbox">
                      <input type="checkbox" /> Education
                    </label>
                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-black">Search for...</label>
                  <div className="control has-text-black">
                    <input
                      className="input is-rounded has-background-white"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
              </div>

              <div id="imageSection" className="box has-background-light has-text-centered">
              <h3 className="subtitle is-3 level-item has-text-centered has-text-black">Graph</h3>
                <div className="image is-256x256">
                  <Graph1 />
                </div>
              </div>
            </div>
            <div className="column is-half has-text-centered"></div>
          </div>
        </div>
      </section>
    </>
  );
}