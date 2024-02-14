import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchCatalog } from "../../store/features/catalogSlice";
import { Marquee } from "../../ui/Marquee/Marquee";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import cl from "./style.module.scss";

export const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const catalogItems = useSelector((state: RootState) => state.catalog.items);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <div>
      <Marquee text="Каталог" repeat={10} />
      <div className={cl.container}>
        {catalogItems.map((item, index) => (
          <CatalogItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
