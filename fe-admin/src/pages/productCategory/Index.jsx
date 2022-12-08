import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TitlePage from "../../components/TitlePage";
import SearchBar from "../../components/SearchBar";
import Table from "./Table";

const Index = () => {
  const onAddItemHandler = () => {};
  const onTemplateHandler = () => {};
  const onImportHandler = () => {};
  const onSearchHandler = () => {};
  return (
    <React.Fragment>
      <Breadcrumb
        data={[
          {
            name: "Product Category",
            url: "/product-category",
            active: true,
          },
        ]}
      />
      <TitlePage title={"Master Product Category"} />
      <SearchBar
        addItemHandler={onAddItemHandler}
        TemplateHandler={onTemplateHandler}
        ImportHandler={onImportHandler}
        searchHandler={onSearchHandler}
      />

      <Table />
    </React.Fragment>
  );
};

export default Index;
