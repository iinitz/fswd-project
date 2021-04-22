import { Button, Col, Row } from "react-bootstrap";
import CartItem from "@components/common/CartItem";
import { useEffect, useMemo, useState } from "react";
import { Product } from "@type/SchemaModel";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { productTotal } from "@modules/Utils";
import Link from "next/link";
import { getCartItems } from "@modules/Cart";

const CheckoutPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { loading: meLoading, error: meError, data: meData } = useQuery(
    gql`
      query {
        me {
          shippingAddress
          billingAddress
        }
      }
    `
  );

  const { loading, error, data } = useQuery(
    gql`
      query productByIds($productIds: [MongoID!]!) {
        productByIds(_ids: $productIds) {
          _id
          name
          detail
          price
          imageLocation
        }
      }
    `,
    {
      variables: {
        productIds: getCartItems(),
      },
    }
  );

  const items = useMemo(() => {
    return products.length;
  }, [products]);

  const total = useMemo(() => {
    return productTotal(products);
  }, [products]);

  useEffect(() => {
    if (!loading && data) setProducts(data.productByIds);
  }, [loading]);

  if (loading || meLoading) {
    return <p>Loading</p>;
  }

  return (
    <Row>
      <Col md={12} className="text-center mt-4 mb-5">
        <h2>
          <i className="fa fa-shopping-cart" /> Checkout
        </h2>
      </Col>
      <Col md={12}>
        {products.map((product) => (
          <CartItem key={product._id} product={product} noRemove />
        ))}
      </Col>
      <Col md={12} className="text-right mb-2">
        <h4 className="d-inline mr-2">{items}</h4>
        items
      </Col>
      <Col md={12} className="text-right mb-4">
        <h5 className="d-inline mr-3">Total</h5>
        <h2 className="d-inline mr-1">{total}</h2>
        <small className="text-muted">THB</small>
      </Col>

      <Col md={6}>
        <h4 className="d-inline">Billing Address</h4>{" "}
        <Link href="/customer">
          <a>
            <small className="ml-2">
              <i className="fa fa-pen" /> Edit
            </small>
          </a>
        </Link>
        <hr />
        {meData?.me.billingAddress}
      </Col>

      <Col md={6}>
        <h4 className="d-inline">Shipping Address</h4>{" "}
        <Link href="/customer">
          <a>
            <small className="ml-2">
              <i className="fa fa-pen" /> Edit
            </small>
          </a>
        </Link>
        <hr />
        {meData?.me.shippingAddress}
      </Col>

      <Col md={6} />

      <Col md={12} className="my-5 pb-5">
        <Link href="/payment">
          <Button block variant="success">
            <i className="fa fa-shopping-cart mr-1" /> Place Order
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default CheckoutPage;
