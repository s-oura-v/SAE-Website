import React, { Component } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/sponsor.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface SponsorCardProps {
  src: string;
  backgroundColor: string;
  index: number;
}

interface IndexState {
  hoveredCardIndex: number | null;
  typedText: string;
}

class Index extends Component<{}, IndexState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      hoveredCardIndex: null,
      typedText: '',
    };
  }

  handleCardMouseOver = (index: number) => {
    this.setState({ hoveredCardIndex: index });
  };

  handleCardMouseOut = () => {
    this.setState({ hoveredCardIndex: null });
  };

  renderSponsorCard = (props: SponsorCardProps) => {
    const { src, backgroundColor, index } = props;
    const { hoveredCardIndex } = this.state;

    return (
      <div
        className={`${styles.card}`}
        style={{ backgroundColor: hoveredCardIndex === index ? 'white' : backgroundColor }}
        onMouseOver={() => this.handleCardMouseOver(index)}
        onMouseOut={this.handleCardMouseOut}
      >
        <Image className={styles.img} src={src} alt="Sponsor Image" width={290} height={117.15} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <Navbar BgColor="black" />
        <div className={styles.father}>
          <div className={styles.sponsorContainer}>
            <div className={styles.secondLine}>
              OUR <span className={styles.highlight}>SPONSORS</span>
            </div>
          </div>

          <div className="sponsor-page bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className={styles.hello}>
              <div className={styles.row}>
                {this.renderSponsorCard({ src: '/sponsor-images/jaguar.png', backgroundColor: '#deeae2', index: 0 })}
                {this.renderSponsorCard({ src: '/sponsor-images/bmw.png', backgroundColor: '#deeae2', index: 1 })}
                {this.renderSponsorCard({ src: '/sponsor-images/mercedes1.png', backgroundColor: '#deeae2', index: 2 })}
              </div>

              <div className={styles.row}>
                {this.renderSponsorCard({ src: '/sponsor-images/unilever1.png', backgroundColor: '#deeae2', index: 3 })}
                {this.renderSponsorCard({ src: '/sponsor-images/itc2.png', backgroundColor: '#deeae2', index: 4 })}
                {this.renderSponsorCard({ src: '/sponsor-images/bhel.webp', backgroundColor: '#deeae2', index: 5 })}
              </div>

              <div className={styles.row}>
                {this.renderSponsorCard({ src: '/sponsor-images/lg3.png', backgroundColor: '#deeae2', index: 6 })}
                {this.renderSponsorCard({ src: '/sponsor-images/Land-Rover.png', backgroundColor: '#deeae2', index: 7 })}
                {this.renderSponsorCard({ src: '/sponsor-images/hy.png', backgroundColor: '#deeae2', index: 8 })}
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.headline}>Welcome to the official sponsors page.</div>
            <div className={styles.subtext}>Explore the unmatched synergy between iconic automotive brands.</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
