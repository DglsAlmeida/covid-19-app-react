import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, TableContent } from './styles';
import ReactPaginate from 'react-paginate';

interface CountriesProps {
  Country: string;
  TotalConfirmed: number;
  TotalRecovered: number;
  TotalDeaths: number;
  Date: Date;
  FormattedDate: Date;
}

export function Table(){
  const usersPerPage = 10;

  const [countries, setCountries] =  useState<CountriesProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const pagesVisited = currentPage * usersPerPage;

  const displayUsers = countries
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map(country => {
      return (
        <tr key={country.Country}>
          <td>{country.Country}</td>
          <td>{country.TotalConfirmed}</td>
          <td>{country.TotalRecovered}</td>
          <td>{country.TotalDeaths}</td>
          <td>{country.FormattedDate}</td>
        </tr>
      )
    })

  const pageCount = Math.ceil(countries.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setCurrentPage(selected);
  }
 
  useEffect(() => {
    setLoading(true);
    async function getCountries() {
      const response = await api.get('summary');
      const formattedDatas = response.data.Countries.map((country: CountriesProps ) => {
        console.log(country.Date)
        return {
          ...country,
          FormattedDate: new Intl.DateTimeFormat('en-US').format(new Date(country.Date))
        }
      });
      setCountries(formattedDatas);
      setLoading(false);
    }

    getCountries();
  }, [])

  return (
    <Container>
      <h1>Cases by country</h1>
      <TableContent>
        {!loading && (
          <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Date</th>
              </tr>
          </thead>
          )}
          <tbody>
            {displayUsers}
          </tbody>
      </TableContent>
      <ReactPaginate 
        previousLabel={"<-"}
        nextLabel={"->"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageRangeDisplayed={0}
        marginPagesDisplayed={10}
      />
    </Container>
  )
}