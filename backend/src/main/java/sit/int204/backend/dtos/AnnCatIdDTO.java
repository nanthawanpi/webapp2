package sit.int204.backend.dtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import sit.int204.backend.entities.AnnouncementDisplayEnum;

import java.time.Instant;

@Getter
@Setter
public class AnnCatIdDTO {
    private Integer id;
    private String announcementTitle;
    private String announcementDescription;
    private Instant publishDate;
    private Instant closeDate;
    private AnnouncementDisplayEnum announcementDisplay;
    @JsonIgnore
    private CategoryDTO categories;
    public String getAnnouncementCategory() {
        return categories == null ? "-" : categories.getAnnouncementCategory();
    }
    public Integer getCategoryId() {
        return categories.getCategoryId();
    }
}
