document.addEventListener('DOMContentLoaded', function() {
    const charactersContainer = document.getElementById('characters-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');
    const searchInput = document.getElementById('search');
    const statusFilter = document.getElementById('status-filter');
    const genderFilter = document.getElementById('gender-filter');
    
    let currentPage = 1;
    let totalPages = 1;
    let characters = [];
    let filteredCharacters = [];
    
    // Fetch characters from API
    async function fetchCharacters(page = 1, name = '', status = '', gender = '') {
        try {
            let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
            
            if (name) url += `&name=${encodeURIComponent(name)}`;
            if (status) url += `&status=${encodeURIComponent(status)}`;
            if (gender) url += `&gender=${encodeURIComponent(gender)}`;
            
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.error) {
                charactersContainer.innerHTML = `<p class="no-results">${data.error}</p>`;
                totalPages = 0;
                updatePagination();
                return;
            }
            
            characters = data.results;
            totalPages = data.info.pages;
            
            displayCharacters(characters);
            updatePagination();
        } catch (error) {
            console.error('Error fetching characters:', error);
            charactersContainer.innerHTML = `<p class="no-results">Error loading characters. Please try again later.</p>`;
            totalPages = 0;
            updatePagination();
        }
    }
    
    // Display characters in the grid
    function displayCharacters(charactersToDisplay) {
        charactersContainer.innerHTML = '';
        
        if (charactersToDisplay.length === 0) {
            charactersContainer.innerHTML = '<p class="no-results">No characters found.</p>';
            return;
        }
        
        charactersToDisplay.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';
            
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}" class="character-image">
                <div class="character-info">
                    <h3 class="character-name">${character.name}</h3>
                    <p class="character-details">
                        <span class="status ${character.status.toLowerCase()}"></span>
                        ${character.status} - ${character.species}
                    </p>
                    <p class="character-details">Gender: ${character.gender}</p>
                    <p class="character-details">Last location: ${character.location.name}</p>
                </div>
            `;
            
            charactersContainer.appendChild(characterCard);
        });
    }
    
    // Update pagination buttons and info
    function updatePagination() {
        pageInfo.textContent = `Page ${currentPage} of ${totalPages || 1}`;
        
        prevBtn.disabled = currentPage === 1 || totalPages === 0;
        nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    }
    
    // Event listeners for pagination
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchCharacters(currentPage, searchInput.value, statusFilter.value, genderFilter.value);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchCharacters(currentPage, searchInput.value, statusFilter.value, genderFilter.value);
        }
    });
    
    // Event listeners for filters
    searchInput.addEventListener('input', () => {
        currentPage = 1;
        fetchCharacters(currentPage, searchInput.value, statusFilter.value, genderFilter.value);
    });
    
    statusFilter.addEventListener('change', () => {
        currentPage = 1;
        fetchCharacters(currentPage, searchInput.value, statusFilter.value, genderFilter.value);
    });
    
    genderFilter.addEventListener('change', () => {
        currentPage = 1;
        fetchCharacters(currentPage, searchInput.value, statusFilter.value, genderFilter.value);
    });
    
    // Initial load
    fetchCharacters(currentPage);
});