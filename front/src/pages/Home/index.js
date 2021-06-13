import './styles.css'
import TradeHistory from '../../components/TradeHistory'
import ShowTrade from '../../components/ShowTrade'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
const Home = () => {

  return (
    <Container fluid className="page-container">
      <Row>
        <Col xs={9} className="show-trade-col">
          <ShowTrade />
        </Col>
        <Col xs={3}>
          <TradeHistory />
        </Col>

      </Row>

    </Container>
  )
}

export default Home