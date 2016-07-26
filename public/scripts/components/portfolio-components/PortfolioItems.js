var PortfolioItems = React.createClass({
  render: function() {
    return (	
    	<div>
        <PortfolioItem title="Alpacammando (2016)" imgSrc = "images/project_alpaca_preview.png" link="Link Coming Soon" description="Alpacammando is a video game in development for Windows and Mac OSX. The game is a 2D Action Platformer akin to the classic games of the genre. Players control a cyborg alpaca who is armed to the hoof with the latest in cybernetic technology. They must run, jump, shoot, and dash their way through a series of levels and stop the aliens from conquering Earth. Demo Coming Soon."/>
        <PortfolioItem title="Airduino (2016)" imgSrc = "images/airdunio-preview-image.png" link="Link Coming Soon" description="Airduino is a video game that uses an Arduino Uno and an Adafruit Accelerometer for Serial Inputs. Players hold a 3D printed paper airplane with an accelerometer mounted on it to move the airplane in four directions to avoid obstacles. If the player is hit three times, then the game is over. "/>
      </div>        
		);
  }
});

var PortfolioItem = React.createClass({
  render: function() {
    return (	
			<div className="portfolio-item_box">
				<div className="portfolio-item__preview-image">
					<img src = {this.props.imgSrc} />	
				</div>
				<div className="portfolio-item__text-content">
					<h2 className="portfolio-item_title"> {this.props.title} </h2>
					<h3 className="portfolio-item_link"> {this.props.link} </h3>
					<div className="portfolio-item_description">
				    <p>
						  {this.props.description}
						</p>
					</div>
				</div>
			</div>
		);
  }
});

ReactDOM.render(
	<PortfolioItems />, document.getElementById('portfolio-items')
);
