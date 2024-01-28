import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { JSX } from "react/jsx-runtime";

export function Store() {
  return (
    <>
      <h1>Category</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(
          (
            item: JSX.IntrinsicAttributes & {
              id: number;
              name: string;
              price: number;
              imgUrl: string;
            }
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          )
        )}
      </Row>
    </>
  );
}
