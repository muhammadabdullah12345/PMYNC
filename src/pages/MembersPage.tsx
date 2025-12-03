import { useMemo, useState } from "react";
import membersData from "../data/members.json";

type Member = (typeof membersData)[number];

const ITEMS_PER_PAGE = 3;

export function MembersPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [sector, setSector] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState<Member["type"]>("Leadership");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const searchLower = search.toLowerCase();
    return membersData.filter((member) => {
      if (member.type !== type) return false;

      if (searchLower) {
        const nameMatch = member.name.toLowerCase().includes(searchLower);
        const cityMatch = member.city.toLowerCase().includes(searchLower);
        if (!nameMatch && !cityMatch) return false;
      }

      if (region && member.province !== region) return false;
      if (sector && member.sector !== sector) return false;
      if (year && member.year !== year) return false;

      return true;
    });
  }, [search, region, sector, year, type]);

  const total = filtered.length;
  const end = page * ITEMS_PER_PAGE;
  const visible = filtered.slice(0, end);
  const canLoadMore = end < total;

  const handleTypeClick = (newType: Member["type"]) => {
    setType(newType);
    setPage(1);
  };

  const handleLoadMore = () => {
    if (canLoadMore) {
      setPage((p) => p + 1);
    }
  };

  return (
    <>
      <section className="hero">
        <img src="/assets/images/aboutPage/aboutHeroImg.png" alt="" />
        <div className="hero-content">
          <h1>
            <span>NYC </span>Members
          </h1>
          <p>
            Meet the diverse voices representing Pakistan&apos;s youth across
            all provinces and sectors, driving change and innovation nationwide
          </p>
          <div className="hero-cards">
            <div className="card">
              <h1>24+</h1>
              <p>Virtual members</p>
            </div>
            <div className="card">
              <h1>5</h1>
              <p>Provinces</p>
            </div>
            <div className="card">
              <h1>6+</h1>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </section>

      <div className="controls-container">
        <div className="search-section">
          <div className="search-bar">
            <img src="/assets/images/searchIcon.svg" alt="Search" />
            <input
              type="text"
              id="memberSearch"
              placeholder="Search by name or city..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <div className="filters">
            <select
              id="regionFilter"
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
                setPage(1);
              }}
            >
              <option value="">All Regions</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="KPK">KPK</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Federal">Federal</option>
              <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
              <option value="AJK">AJK</option>
            </select>
            <select
              id="sectorFilter"
              value={sector}
              onChange={(e) => {
                setSector(e.target.value);
                setPage(1);
              }}
            >
              <option value="">All Sectors</option>
              <option value="Technology">Technology</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Social Work">Social Work</option>
              <option value="Environment">Environment</option>
              <option value="Tourism">Tourism</option>
              <option value="Arts">Arts</option>
            </select>
            <select
              id="yearFilter"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
                setPage(1);
              }}
            >
              <option value="">Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>

        <div id="memberSelection">
          <div id="memberButtons">
            <button
              className={`memberType ${type === "Leadership" ? "active" : ""}`}
              data-type="Leadership"
              onClick={() => handleTypeClick("Leadership")}
            >
              <img src="/assets/images/membersPage/achievement.svg" alt="" />
              Leadership
            </button>
            <button
              className={`memberType ${type === "Members" ? "active" : ""}`}
              data-type="Members"
              onClick={() => handleTypeClick("Members")}
            >
              <img src="/assets/images/membersPage/people.svg" alt="" />
              Members
            </button>
            <button
              className={`memberType ${type === "Alumni" ? "active" : ""}`}
              data-type="Alumni"
              onClick={() => handleTypeClick("Alumni")}
            >
              <img src="/assets/images/membersPage/alumni.svg" alt="" />
              Alumni
            </button>
          </div>
        </div>

        <div className="results-info">
          <p id="showingCount">
            Showing {Math.min(end, total)} out of {total} members
          </p>
        </div>
      </div>

      <div id="membersGrid" className="members-grid">
        {visible.map((member) => (
          <div className="member-card" key={member.id}>
            <div className="card-image">
              <img
                src={member.image}
                alt={member.name}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/assets/images/default-avatar.png";
                }}
              />
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p className="location">
                {member.city}, {member.province}
              </p>

              <div className="detail-section">
                <h4>Designation</h4>
                <p className="designationpara">{member.designation}</p>
              </div>

              <div className="detail-section">
                <h4>Sector</h4>
                <p className="sectorpara">{member.sector}</p>
              </div>

              <div className="card-footer">
                <div className="line" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {canLoadMore && (
          <button id="loadMoreBtn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </>
  );
}
